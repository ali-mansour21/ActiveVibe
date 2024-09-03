<?php

namespace App\Http\Controllers\api\admin;

use App\Http\Controllers\api\files\FileController;
use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\EventGuide;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AdminEventController extends Controller
{
    protected $file_controller;
    public function __construct(FileController $fileController)
    {
        $this->file_controller = $fileController;
    }
    public function get_events()
    {
        $created_by = auth('api')->id();
        $events = Event::where('created_by', $created_by)->get();
        return response()->json(['status' => 'success', 'data' => $events]);
    }
    public function create_event(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i|after:start_time',
            'seat_limit' => 'required|integer|min:1',
            'location' => 'required|string|max:255',
            'status' => 'required|in:active,not_active',
            'event_type' => 'required|in:free,ticketed',
            'event_photo' => 'required|string',
            'event_location_type' => 'required|in:virtual,not_virtual',
            'category_id' => 'required|exists:categories,id',
            'guides' => 'required|array|min:1',
            'guides.*' => 'exists:guides,id',
            'tickets' => 'required_if:event_type,ticketed|array',
            'tickets.*.type' => 'required|in:standard,business,vip',
            'tickets.*.cost' => 'required_if:tickets.*.type,ticketed|numeric|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        $photoPath = $this->file_controller->storeBase64Attachment($request->event_photo, 'events');

        // Check if the photo was stored successfully
        if (!is_string($photoPath)) {
            // If photo upload failed, return the error response from FileController
            return $photoPath; // Already formatted as a JSON response
        }

        $event = new Event();
        $event->title = $request->title;
        $event->description = $request->description;
        $event->start_date = $request->start_date;
        $event->start_time = $request->start_time;
        $event->end_time = $request->end_time;
        $event->seat_limit = $request->seat_limit;
        $event->location = $request->location;
        $event->status = $request->status;
        $event->event_type = $request->event_type;
        $event->event_location_type = $request->event_location_type;
        $event->category_id = $request->category_id;
        $event->created_by = Auth::id();
        $event->event_photo = $photoPath;
        $event->save();

        foreach ($request->guides as $guideId) {
            EventGuide::create([
                'event_id' => $event->id,
                'guide_id' => $guideId,
            ]);
        }

        if ($request->has('tickets')) {
            foreach ($request->tickets as $ticketData) {
                Ticket::create([
                    'type' => $ticketData['type'],
                    'cost' => $ticketData['cost'],
                    'is_free' => $ticketData['cost'] == 0,
                    'event_id' => $event->id,
                ]);
            }
        }

        return response()->json(['status' => 'success', 'message' => 'Event Created Successfully'], 201);
    }
    public function delete_event(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'event_id' => 'required|exists:events,id',
        ]);

        // If validation fails, return an error response
        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }
        $event = Event::find($request->event_id);
        try {
            $event->delete();

            return response()->json(['status' => 'success', 'message' => 'Event deleted successfully.']);
        } catch (\Exception $e) {
            // Handle any exceptions that occur during the deletion
            return response()->json(['status' => 'error', 'message' => 'Failed to delete the event.'], 500);
        }
    }
}
