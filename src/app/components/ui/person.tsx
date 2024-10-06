import Image from "next/image";
import styled from "styled-components";

const ImageStyle = styled(Image)`
  position: absolute;
  left: -6rem;
  bottom: 0;
  height: 84%;
`;

const PersonStyle = styled.div`
  position: relative;
  height: 100vh;
`;

export default function Person() {
  const rand = Math.floor(Math.random() * 3 + 1);

  return (
    <PersonStyle>
      {(() => {
        if (rand == 1) {
          return (
            <ImageStyle src="/man1.svg" alt="start" width={650} height={650} />
          );
        } else {
          return (
            <ImageStyle
              src="/woman1.svg"
              alt="start"
              width={650}
              height={650}
            />
          );
        }
      })()}
    </PersonStyle>
  );
}
