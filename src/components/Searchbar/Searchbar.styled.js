// import styled from "@emotion/styled";
// // import { Form, Field } from "formik";
// // import { IoSearchCircleOutline } from "react-icons/io5";

// export const Header = styled.header`
//   top: 0;
//   left: 0;
//   position: sticky;
//   z-index: 1100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 64px;
//   padding-right: 24px;
//   padding-left: 24px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   color: #fff;
//   background-color: #3f51b5;
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
// `;

// export const SearchForm = styled.form`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   max-width: 600px;
//   background-color: #fff;
//   border-radius: 5px;
//   overflow: hidden;
// `;

// export const Input = styled.input`
//   cursor: text;
//   display: inline-block;
//   width: 100%;
//   height: 25px;
//   font: inherit;
//   font-size: 18px;
//   border: none;
//   outline: none;
//   padding: 5px 10px;

//   color: #000;

//   &::placeholder {
//     font: inherit;
//     font-size: 18px;
//   }
// `;

// export const Button = styled.button`
//   display: flex;
//   flex-shrink: 0;
//   justify-content: center;
//   align-items: center;
//   width: auto;
//   height: 48px;
//   border: 2px solid #fff;
//   border-radius: 25%;

//   outline: none;
//   background-color: #3f51b5;
// `;

import styled from '@emotion/styled';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;

export const Button = styled.button`
   display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 48px;
  border: 2px solid #fff;
  border-radius: 25%;

  outline: none;
  background-color: #3f51b5;
`;

export const Span = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
   cursor: text;
  display: inline-block;
  width: 100%;
  height: 25px;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 5px 10px;

  color: #000;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
