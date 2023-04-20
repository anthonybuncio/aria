import { promises as fs } from 'fs';
import path from "path";

export default async function handler(
	req,
	res
) {
	const audio = await fs.readFile(path.join(__dirname, "sample001.mp3"));
	// const audio = await fs.createReadStream(path.join(__dirname, "sample001.mp3"))


	// const response = await openai.createTranscription(
	// 	audio,
	// 	"whisper-1",
	// );

	res.status(200).json({ audio });
}