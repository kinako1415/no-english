import { useSpeechRecognition } from "react-speech-recognition";
import styled from "styled-components";

const CommentStyle = styled.div`
  /* 吹き出し本体の背景色用 */
  position: relative;
  width: 44rem;
  height: 18rem;
  display: inline-block;
  background: #fff;
  border-radius: 38px;
  padding: 6px 26px;

  color: #000;
  border: 12px solid #ffeb0d;
  box-sizing: border-box;
  margin-bottom: 2rem;
`;

const TextStyle = styled.p`
  line-height: 1.6rem;
  font-size: 1.1rem;
  font-weight: 400;
  overflow-wrap: break-word;
`;

export default function Comment() {
  const { transcript } = useSpeechRecognition();

  return (
    <CommentStyle>
      <TextStyle>{transcript}</TextStyle>
    </CommentStyle>
  );
}
