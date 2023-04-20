export const getAudio = async (message: string) => {
	const voiceId = "21m00Tcm4TlvDq8ikWAM";
	const apiKey = process.env.ELEVENLABS_API_KEY;

	return fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"xi-api-key": apiKey
		},
		body: JSON.stringify({
			text: message,
			voice_settings: {
				stability: 0,
				similarity_boost: 0
			}
		})
	});
};