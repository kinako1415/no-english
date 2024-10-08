"use client";
import React, { useEffect, useState } from "react";
import "regenerator-runtime";
import Image from "next/image";
import { useSpeechRecognition } from "react-speech-recognition";
import StartButton from "@/app/components/ui/speech/startBotton";
import { zenMaruGothic } from "@/app/fonts/zenFont";
import StopButton from "@/app/components/ui/speech/stopButton";
import Comment from "@/app/components/ui/speech/comment";

import Person from "@/app/components/ui/speech/person";
import styled from "styled-components";
import TrueOrFalse from "@/app/components/ui/speech/trueOrFalse";

const PlayButton = styled.div`
  position: fixed;
  z-index: 6;
`;

const ContentsStyle = styled.div`
  display: flex;
`;

const StersStyled = styled(Image)`
  position: absolute;
  left: 0;
`;

const RightContentsStyle = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

const Speech = () => {
  const [
    isBrowserSupportsSpeechRecognition,
    setBrowserSupportsSpeechRecognition,
  ] = useState(false);

  const { listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

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
        <StersStyled src="/stars.svg" alt="stars" width={660} height={800} />
        <Person />
        <RightContentsStyle>
          <Comment />
          <TrueOrFalse />
        </RightContentsStyle>
      </ContentsStyle>
    </div>
  );
};

export default Speech;
