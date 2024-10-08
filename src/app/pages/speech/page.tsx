"use client";
import React, { useEffect, useState } from "react";
import "regenerator-runtime";
import { useSpeechRecognition } from "react-speech-recognition";
import StartButton from "@/app/components/ui/startBotton";
import { zenMaruGothic } from "@/app/fonts/zenFont";
import StopButton from "@/app/components/ui/stopButton";
import Comment from "@/app/components/ui/comment";

import Person from "@/app/components/ui/person";
import styled from "styled-components";

const PlayButton = styled.div`
  position: fixed;
  z-index: 6;
`;

const ContentsStyle = styled.div`
  display: flex;
`;

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
    <div className={zenMaruGothic.className}>
      <PlayButton>
        {listening ? (
          <StopButton>停止</StopButton>
        ) : (
          <StartButton>開始</StartButton>
        )}
      </PlayButton>
      <ContentsStyle>
        <Person />
        <Comment />
        <button type="button" onClick={() => resetTranscript()}>
          リセット
        </button>
        <div>{transcript}</div>
      </ContentsStyle>
    </div>
  );
};

export default Speech;
