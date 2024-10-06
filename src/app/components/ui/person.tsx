import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [rand, setRand] = useState(0);
  useEffect(() => {
    setRand(Math.floor(Math.random() * 2 + 1));
  }, []);

  return (
    <PersonStyle>
      {(() => {
        if (rand == 1) {
          return (
            <ImageStyle src="/man1.svg" alt="start" width={650} height={650} />
          );
        } else if (rand == 2) {
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
