<?php

namespace App\Http\Controllers\api\files;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Exception;

class FileController extends Controller
{

    public function storeBase64Attachment($base64String, $path)
    {
        try {
            // Check if the base64 string contains a comma
            if (strpos($base64String, ',') === false) {
                throw new Exception('Invalid base64 string format: missing metadata and data separator');
            }

            // Split the base64 string to get the file metadata and the file data
            list($metadata, $fileData) = explode(',', $base64String, 2);

            // Decode the file data
            $fileData = base64_decode($fileData);

            // Verify decoding was successful
            if ($fileData === false) {
                throw new Exception('Base64 decode failed');
            }

            // Check the file size (in bytes)
            $fileSize = strlen($fileData);
            if ($fileSize > 10 * 1024 * 1024) { // 10MB in bytes
                throw new Exception('File size exceeds the 10MB limit');
            }

            // Extract the file type from the metadata
            if (preg_match('/data:(.*?);base64/', $metadata, $matches)) {
                $fileType = $matches[1];
            } else {
                throw new Exception('Invalid base64 metadata');
            }

            // Supported extensions
            $extensions = [
                'image/jpeg' => 'jpg',
                'image/png' => 'png',
                'application/pdf' => 'pdf',
                'text/plain' => 'txt',
                'application/msword' => 'doc',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document' => 'docx',
                'audio/mpeg' => 'mp3', // Support for MP3 files
                'audio/mpga' => 'mp3', // Support for MP3 files (alternative MIME type)
                'audio/mp3' => 'mp3',  // Support for MP3 files (alternative MIME type)
                'audio/wav' => 'wav',  // Support for WAV files
            ];

            if (!isset($extensions[$fileType])) {
                throw new Exception('Unsupported file type');
            }

            $fileExtension = $extensions[$fileType];
            $fileName = uniqid() . '.' . $fileExtension;
            $filePath = $path . '/' . $fileName;

            // Ensure the file is saved in the 'public' disk
            $storagePath = $filePath;

            // Create directory if not exists
            Storage::disk('public')->makeDirectory($path);

            // Store the file
            if (!Storage::disk('public')->put($filePath, $fileData)) {
                throw new Exception('Failed to save file');
            }

            return $storagePath;
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
