import styled, { createGlobalStyle } from "styled-components";

export const GloablStyles = createGlobalStyle`
    html {
        min-height: 100%;
    }

    body {
        min-height: 100%;
        padding: 48px 0;
        margin: 0;
        font-family: arial;
        font-size: 14px;
        background: #69e7cf;
        background: -moz-linear-gradient(top,  #69e7cf 0%, #497ee4 100%);
        background: -webkit-linear-gradient(top,  #69e7cf 0%,#497ee4 100%);
        background: linear-gradient(to bottom,  #69e7cf 0%,#497ee4 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#69e7cf', endColorstr='#497ee4',GradientType=0 );
    }

    form {
        width: 100%;
    }

    h1 {
        font-size: 32px;
    }
`;

export const FlexBox = styled.div<{
  gap?: number;
  flexDirection?:
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "initial"
    | "inherit";
}>`
  display: flex;
  width: 100%;
  gap: ${(p) => p.gap}px;
  align-items: center;
  flex-direction: ${(p) => p.flexDirection ?? undefined};
`;

export const FlexCol = styled.div<{
  flexGrow?: 1 | 0;
}>`
  flex-grow: ${(p) => p.flexGrow};
`;

export const ListFlexBox = styled.div<{
  gap?: number;
  flexDirection?:
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "initial"
    | "inherit";
}>`
  display: flex;
  width: 100%;
  gap: ${(p) => p.gap}px;
  flex-direction: ${(p) => p.flexDirection ?? undefined};
`;

export const InputText = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 38px;
  line-height: 38px;
  padding: 0;
  box-sizing: border-box;
  border: 1px solid #c0c0c0;
  padding: 0 12px;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #8c48e0;
  color: #fff;
  border: 0;
  border-radius: 4px;
  height: 38px;
  line-height: 38px;
  padding: 0 8px;
  cursor: pointer;
`;

export const ButtonAddTodo = styled(Button)`
  position: absolute;
  right: -2px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #e54e3d;
  width: 32px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
