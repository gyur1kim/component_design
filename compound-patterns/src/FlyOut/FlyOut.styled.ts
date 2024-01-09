import styled from "styled-components";

export const Toggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 20px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    transform: scale(1.1)
  }

  transition: 200ms;
`

export const List = styled.div`
  border-radius: 10px;
  width: 100px;
  height: fit-content;
  box-sizing: border-box;
  background-color: black;
  color: white;
  transition: 200ms;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 30px;
  padding: 5px 7px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    transform: scale(1.05)
  }

  transition: 100ms;
`