<?php

namespace App\Http\Controllers\api\admin;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\EventGuide;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AdminEventController extends Controller
{
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
        $event->category_id = $request->category_id;
        $event->created_by = Auth::id();
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

        return response()->json(['status' => 'success', 'data' => $event], 201);
    }
    public function delete_event(Request $request){}
}
