import { Button } from "@radix-ui/themes";
import styled from "styled-components";
import Image from "next/image";

const BottonStyle = styled(Button)`
  padding: 2rem;
  background-color: #ffffff;
  color: #3b3b3b;
  font-size: 1.6rem;
  border: 12px solid #30b8f3;
`;

export default function StartButton({ children }: { children: string }) {
  return (
    <div>
      <BottonStyle radius="full">
        {children}
        <Image src="/startMark.svg" alt="start" width={30} height={40} />
      </BottonStyle>
    </div>
  );
}
