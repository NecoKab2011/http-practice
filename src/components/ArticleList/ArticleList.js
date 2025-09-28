import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;
`;


export const List = styled.ul`
list-style: none;
width: 830px;
display: flex;
flex-wrap: wrap;
`;

export const Item = styled.li`
  padding: 15px 20px;
  background-color: grey;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  width: 350px;
  border-radius: 20px;
  border: 2px solid black;
  margin-bottom: 10px;
  margin-right: 10px;
  transition: background 0.2s;

  &:hover {
    background: rgb(75, 75, 75);
    box-shadow: 2px 2px 10px black;
  }
`;

export const Link = styled.a`
  color: white;
  font-family: sans-serif;
  font-size: 14px;
`;

