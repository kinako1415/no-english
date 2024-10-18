"use client";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 96%;
  top: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 100;
`;

const MenuStyle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-radius: 50px;
  background-color: aqua;
  right: 0;
`;

const MenuContentsStyle = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Link href="/">
            <Button>top ページへ移動</Button>
          </Link>
      <MenuStyle>menu</MenuStyle>
      <MenuContentsStyle>
        <Flex>
          <Link href="/pages/speech">
            <Button>/pages/speech ページへ移動</Button>
          </Link>
          <Link href="/pages/auth">
            <Button>/pages/auth ページへ移動</Button>
          </Link>
        </Flex>
      </MenuContentsStyle>
    </HeaderStyle>
  );
}
