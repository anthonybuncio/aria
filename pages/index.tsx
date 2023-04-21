import { useState } from "react";
import { useEffect } from "react";
import Loader from "@/components/Loader";
import ProgressBar from "@/components/ProgressBar";
import Scroller from "@/components/Scroller";

export default function Home() {
  // Recording states
  const [isRecording, setIsRecording] = useState(false);
  const [recordLoading, setRecordLoading] = useState(false);
  // TTS states
  const [recordedAudio, setRecordedAudio] = useState("");
  const [recordedText, setRecordedText] = useState("");
  // Audio states
  const [audio, setAudio] = useState(null);

  // useEffect(() => {
  //   if (!audio) {
  //     setAudio("llbtsp.mp3");
  //   }
  // }, [audio]);

  const toggleRecord = () => {
    console.log("Ask permissions. Or start/stop record. Then send to Whisper");
    setIsRecording(!isRecording);
  };

  const generateTTS = async () => {
    console.log(
      "Show once speech is transcribed after recording. Send text transcription to openai"
    );

    if (!audio) {
      setAudio("llbtsp.mp3");
    }

    // try {
    //   const response = await fetch("api/audio", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       message: "Sent from the front end",
    //     }),
    //   });

    //   const { file } = await response.json();

    //   console.log(file);

    //   setAudio(file);
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  console.log("Are you recording?", isRecording);
  return (
    <div className="flex h-screen flex-col items-center justify-between text-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600 to-gray-900">
      <div className="flex flex-col w-full h-1/4">
        <ProgressBar />
      </div>
      <div className="flex flex-col w-full h-2/4 justify-center">
        <Loader />
        <Scroller />
      </div>
      <div className="flex flex-col justify-end items-center w-full h-1/4">
        <span
          onClick={toggleRecord}
          className="p-4 uppercase font-bold tracking-widest text-xl cursor-pointer bg-gradient-to-bl from-rose-100 to-teal-100 text-transparent bg-clip-text"
        >
          Talk
        </span>
        {recordLoading && (
          <div className="w-6 h-6 rounded-full animate-spin border-y border-solid border-gray-100 border-t-transparent shadow-md"></div>
        )}

        <button
          onClick={generateTTS}
          className="p-4 uppercase font-bold tracking-widest text-xl cursor-pointer bg-gradient-to-bl from-rose-100 to-teal-100 text-transparent bg-clip-text"
        >
          Send message
        </button>
        <span className="text-xs text-center p-4 uppercase font-bold">
          Response received: {audio}
        </span>
        {audio && (
          <audio
            autoPlay
            // controls
            src={`audio/${audio}`}
            // className="hidden"
          />
        )}
      </div>
    </div>
  );
}
