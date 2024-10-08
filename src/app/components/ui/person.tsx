import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PersonStyle = styled.div`
  height: 100vh;
  position: relative;
`;

const ImageStyle = styled(Image)`
  position: absolute;
  left: -6rem;
  bottom: 0;
  height: 84%;
`;

export default function Person() {
  const [rand, setRand] = useState(0);
  useEffect(() => {
    setRand(Math.floor(Math.random() * 2 + 1));
  }, []);

  return (
    <PersonStyle>
      {(() => {
        if (rand == 1) {
          return (
            <ImageStyle src="/man1.svg" alt="start" width={660} height={660} />
          );
        } else if (rand == 2) {
          return (
            <ImageStyle
              src="/woman1.svg"
              alt="start"
              width={660}
              height={660}
            />
          );
        }
      })()}
    </PersonStyle>
  );
}
