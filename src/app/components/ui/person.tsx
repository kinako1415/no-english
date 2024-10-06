import Image from "next/image";
import styled from "styled-components";

const ImageStyle = styled(Image)`
  position: relative;
  left: -6rem;
  bottom: 0;
`;

export default function Person() {
  const rand = Math.floor(Math.random() * 3 + 1);

  return (
    <div>
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
    </div>
  );
}
