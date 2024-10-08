import Image from "next/image";
import { useSpeechRecognition } from "react-speech-recognition";
import styled from "styled-components";

const CommentStyle = styled.div`
  /* 吹き出し本体の背景色用 */
  position: relative;
  left: 10rem;
  width: 40rem;
  height: fit-content;
  display: inline-block;
  background: #fff;
  border-radius: 30px;
  padding: 16px;
  font-weight: 400;
  color: #000;
  border: 10px solid #ffeb0d;
  box-sizing: border-box;

  /* 吹き出しのしっぽ：本体の背景色用 */
  &:before {
    content: "";
    position: absolute;
    bottom: calc(50% - 30px);
    left: -60px;
    transform: translateX(-50%);
    transform: scaleY(0.8);
    transform: rotate(90deg);
    border: 30px solid transparent;
    border-top: 30px solid #fff;
    z-index: 2;
  }

  /* 吹き出しのしっぽ：枠線の色用 */
  &:after {
    content: "";
    position: absolute;
    top: calc(50% - 44px);
    left: -88px;
    transform: translateX(-50%);
    transform: scaleY(0.8);
    transform: rotate(90deg);
    border: 44px solid transparent;
    border-top: 44px solid #ffeb0d;
    z-index: 1;
  }
`;

const ImageStyle = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  
`;

const TextStyle = styled.p`
  line-height: 1.6rem;
  overflow-wrap: break-word;
`;

export default function Comment() {
  const { transcript } = useSpeechRecognition();

  return (
    <CommentStyle>
      {/* <ImageStyle src="/comment.svg" alt="start" width={660} height={340} /> */}
      <TextStyle>{transcript}</TextStyle>
      <TextStyle>
        「隣の客はよく柿食う客だ」という早口は、発声の練習に適していると言われますが、実際に発音してみると、柿と客の区別が難しいことに気づくでしょう。さらに、ひらがな・カタカナ・漢字をバランスよく含んでいるので、フォントの表示チェックにも最適です。
        英語の「The quick brown fox jumps over the lazy
        dog」のように、文章全体を確認するのにも便利です。
      </TextStyle>
    </CommentStyle>
  );
}
