import styled from "styled-components";
import Image from "next/image";
import SpeechRecognition from "react-speech-recognition";

const BottonStyle = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.4rem;
  background-color: #ffffff;
  color: #3b3b3b;
  font-size: 1.6rem;
  border: 10px solid #e53a40;
  border-radius: 40px;
  gap: 10px;
  font-weight: 700;
  transition: 200ms;
  &:hover {
    background-color: #fbfafa;
    transform: scale(0.98);
  }
`;

export default function StopButton({ children }: { children: string }) {
  return (
    <BottonStyle onClick={() => SpeechRecognition.stopListening()}>
      {children}
      <Image src="/stopMark.svg" alt="start" width={30} height={30} />
    </BottonStyle>
  );
}
