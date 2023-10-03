import React from "react";
import styled from "styled-components";

type ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface Props {
  boxType?: string;
  name: string;
  placeHolder: string;
  handleChange: ChangeHandler;
}

const InputBox: React.FC<Props> = ({
  boxType = "text",
  name,
  placeHolder,
  handleChange,
}) => {
  return (
    <Input
      type={boxType}
      name={name}
      id={name}
      onChange={handleChange}
      placeholder={placeHolder}
      autoComplete="off"
    />
  );
};
const Input = styled.input`
  padding: 0.7rem 0.9rem;
  width: 200px;
  outline: none;
  border: 2px solid #cfcfcf;
`;

export default InputBox;
