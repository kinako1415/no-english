import { useSpeechRecognition } from "react-speech-recognition";
import styled from "styled-components";

const BoxStyle = styled.div`
  position: relative;
  width: 18rem;
  height: 18rem;
  border-radius: 38px;
  border: 12px solid #2ddf7b;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FalseMark = styled.div`
  width: 9rem;
  height: 9rem;
  background-color: #ffffff;
  border-radius: 40rem;
  border: 40px solid #2ddf7b;
`;

const TrueMark = styled.div`
  width: 4rem;
  height: 16rem;
  transform: rotate(45deg);
  background-color: #e53a40;
  border-radius: 40rem;
  &::after {
    content: "";
    position: absolute;
    width: 4rem;
    height: 16rem;
    background-color: #e53a40;
    transform: rotate(90deg);
    border-radius: 40rem;
  }
`;

export default function TrueOrFalse() {
  const regex = /[ァ-ヴー]/;

  const { transcript } = useSpeechRecognition();
  return (
    <BoxStyle>{regex.test(transcript) ? <TrueMark /> : <FalseMark />}</BoxStyle>
  );
}
