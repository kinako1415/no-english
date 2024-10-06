"use client";
import React, { useEffect, useState } from "react";
import "regenerator-runtime";
import { useSpeechRecognition } from "react-speech-recognition";
import StartButton from "@/app/components/ui/startBotton";
import { zenMaruGothic } from "@/app/fonts/zenFont";
import StopButton from "@/app/components/ui/stopButton";

import Person from "@/app/components/ui/person";

const Speech = () => {
  const [
    isBrowserSupportsSpeechRecognition,
    setBrowserSupportsSpeechRecognition,
  ] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setBrowserSupportsSpeechRecognition(browserSupportsSpeechRecognition);
  }, [browserSupportsSpeechRecognition]);

  if (!isBrowserSupportsSpeechRecognition) {
    return <span>ブラウザが音声認識未対応です</span>;
  }

  return (
    <div id="react-speech-recognition" className={zenMaruGothic.className}>
      {listening ? (
        <StopButton>停止</StopButton>
      ) : (
        <StartButton>開始</StartButton>
      )}
      <Person />
      <button type="button" onClick={() => resetTranscript()}>
        リセット
      </button>
      <div>{transcript}</div>
    </div>
  );
};

export default Speech;
