import { getAudio } from '@/lib/elevenlabs';
import { promises as fs } from 'fs';
import path from "path";

// RESPONSE - TEXT TO SPEECH
// VOICE - ELEVENLABS

export default async function handler(
	req,
	res
) {
	console.log(req.body);

	const message = "Hello, Anthony! Welcome back.";
	console.log(message);
	try {
		const response = await getAudio(message);
		const arrayBuffer = await response.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		const file = Math.random().toString(36).substring(7);

		// @ts-ignore		
		fs.writeFile(path.join("public", "audio", `${file}.mp3`), buffer, () => { console.log("File success"); });

		return res.status(200).json({ success: true, file: `${file}.mp3` });

		// return JSON.stringify({ file: `${file}.mp3` });
	} catch (error) {
		return new Error(JSON.stringify({ error: error.message }));
	}

}