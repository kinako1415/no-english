"use client";
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

export default function Header() {
  return (
    <HeaderStyle>
      <div>logo</div>
      <MenuStyle>menu</MenuStyle>
    </HeaderStyle>
  );
}
