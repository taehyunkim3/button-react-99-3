import React, { Children, useCallback, useEffect } from "react";
import styled from "styled-components";
import { BsBell } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: ${({ negative }) => (negative ? 800 : 500)};
  font-size: 0.9rem;
  text-align: center;
  color: ${({ color }) => color.font};

  height: ${(props) => props.size.height}px;
  width: ${(props) => props.size.width}px;
  border-radius: 0.5rem;
  border: 3px solid
    ${({ negative, color }) => (negative ? color.bg : "transparent")};

  background-color: ${({ negative, color }) =>
    negative ? "transparent" : color.bg};
`;

const Bell = styled(BsBell)`
  stroke-width: 0.8px;
  color: #000000;
  margin-left: 5px;
`;
const Dot = styled.div`
  height: 5px;
  width: 5px;
  border-radius: 100%;
  background-color: #fab1a0;
  translate: -5px -5px;
`;
const Arrow = styled(AiOutlineRight)`
  margin-left: 5px;
  font-size: 0.8rem;
`;
/**
 *
 * @param {boolean} negative 반전 여부 미입력시: none
 * @param {string} size 사이즈 'small', 'medium', 'large'
 * @param {string} color 색상 'red' 미입력시: green
 * @param {string} icon 아이콘 'bell', 'arrow'
 * @param {children} children 내용은 태그 사이에 넣으면 됩니다.
 * @description 사용자 정의 버튼을 생성합니다.|😀/
 */
export const Button = ({ children, negative, size, color, icon }) => {
  const Icon = useCallback((icon) => {
    switch (icon) {
      case "bell":
        return (
          <>
            <Bell />
            <Dot />
          </>
        );
      case "arrow":
        return <Arrow />;
      default:
        return null;
    }
  }, []);
  const Size = (size) => {
    switch (`${size}`) {
      case "large":
        return { width: 180, height: 45 };
      case "medium":
        return { width: 120, height: 40 };
      case "small":
        return { width: 90, height: 40 };
      default:
        return { width: 120, height: 40 };
    }
  };

  const Color = (color) => {
    switch (`${color}`) {
      case "red":
        return { bg: "#fab1a0", font: "#d63030" };
      default:
        return { bg: "#53eec3", font: "#000000" };
    }
  };

  return (
    <ButtonContainer negative={negative} size={Size(size)} color={Color(color)}>
      {children}
      {Icon(icon)}
    </ButtonContainer>
  );
};
