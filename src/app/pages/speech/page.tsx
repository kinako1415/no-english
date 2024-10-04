"use client";
import React, { useEffect, useState } from "react";
import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

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
    <div id="react-speech-recognition">
      <div>入力: {listening ? "on" : "off"}</div>
      <button
        type="button"
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
      >
        入力開始
      </button>
      <button type="button" onClick={() => SpeechRecognition.stopListening()}>
        Stop
      </button>
      <button type="button" onClick={() => resetTranscript()}>
        リセット
      </button>
      <div>{transcript}</div>
    </div>
  );
};

export default Speech;
