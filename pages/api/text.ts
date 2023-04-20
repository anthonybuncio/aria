import { getAudio } from '@/lib/elevenlabs';
import { promises as fs } from 'fs';
import path from "path";

// INPUT - SPEECH TO TEXT
// OPENAI API

export default async function handler(
	req,
	res
) {

	try {
		res.status(200).json({ name: 'John Doe' });
	} catch (error) {
		return new Error(JSON.stringify({ error: error.message }));
	}

}