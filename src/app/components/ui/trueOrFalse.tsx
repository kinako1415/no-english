import styled from "styled-components";

const BoxStyle = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  border-radius: 30px;
  border: 10px solid #2ddf7b;
  background-color: #ffffff;
`;

export default function TrueOrFalse() {
  return (
    <BoxStyle>
      <div></div>
    </BoxStyle>
  );
}
