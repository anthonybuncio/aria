import { useState } from "react";
import { useEffect } from "react";
import Loader from "@/components/Loader";
import ProgressBar from "@/components/ProgressBar";
import Scroller from "@/components/Scroller";

export default function Home() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [headerText, setHeaderText] = useState("");
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    console.log(isSpeaking);
    if (isSpeaking) {
      setHeaderText(`...`);
    } else {
      setHeaderText(`Press space to start conversation`);
    }
  }, [isSpeaking]);

  useEffect(() => {
    if (!audio) {
      setAudio("llbtsp.mp3");
    }
  }, [audio]);

  const handlePress = (e) => {
    if (e.key === " ") {
      // isSpeaking ? setIsSpeaking(false) : setIsSpeaking(true);
      console.log("pressed space bar, start recording");
    } else {
      console.log("space bar held brrrrrrrrr");
    }
  };

  const generateTTS = async () => {
    try {
      const response = await fetch("api/audio", {
        method: "POST",
        body: JSON.stringify({
          message: "Sent from the front end",
        }),
      });

      const { file } = await response.json();

      console.log(file);

      setAudio(file);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-between text-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600 to-gray-900">
      <div className="flex flex-col w-full h-1/4">
        <ProgressBar />
      </div>
      <div className="flex flex-col w-full h-2/4 justify-center">
        <Loader />
        <Scroller />
      </div>
      <div className="flex flex-col justify-between items-center w-full h-1/4 text-2xl cursor-pointer">
        <span
          onClick={() =>
            console.log(
              "Ask permissions. Or start/stop record. Then send to Whisper"
            )
          }
          className="uppercase font-bold tracking-widest text-2xl bg-gradient-to-bl from-rose-100 to-teal-100 text-transparent bg-clip-text"
        >
          Talk
        </span>
        <div className="w-6 h-6 rounded-full animate-spin border-y border-solid border-gray-100 border-t-transparent shadow-md"></div>
        <button
          // onClick={generateTTS}
          onClick={() => console.log("Send text ")}
          className="p-4 uppercase font-bold tracking-widest text-2xl bg-gradient-to-bl from-rose-100 to-teal-100 text-transparent bg-clip-text"
        >
          Get response
        </button>
        <div className="text-xs text-center">
          <span>Current audio: {audio}</span>
          {audio && (
            <audio
              autoPlay
              controls
              src={`audio/${audio}`}
              // className="hidden"
            />
          )}
        </div>
      </div>
    </div>
  );
}
