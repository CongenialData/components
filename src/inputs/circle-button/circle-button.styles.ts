import styled from "styled-components/macro";
import { CircleButtonRequiredStyleProps } from "./circle-button.interfaces";

export const StyledCircleButton = styled.button<CircleButtonRequiredStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0;

  font: inherit;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;

  background: ${({ theme }): string => theme.CircleButton.background};
  color: ${({ theme }): string => theme.CircleButton.color};

  border: 1px solid transparent;
  border-radius: 50%;
  transition: background-color 0.2s ease-out;

  outline-style: none;

  /**
   * Size
   */
  width: ${({ size, theme }) => theme.CircleButton.size[size]};
  height: ${({ size, theme }) => theme.CircleButton.size[size]};

  /**
   * Spacing
   */
  /* Vertical */
  margin-top: ${({ verticalSpacing, theme }): string =>
    theme.CircleButton.spacing[verticalSpacing]};
  margin-bottom: ${({ verticalSpacing, theme }): string =>
    theme.CircleButton.spacing[verticalSpacing]};
  /*Horizontal*/
  margin-left: ${({ horizontalSpacing, theme }): string =>
    theme.CircleButton.spacing[horizontalSpacing]};
  margin-right: ${({ horizontalSpacing, theme }): string =>
    theme.CircleButton.spacing[horizontalSpacing]};
`;

export const TitleAndIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.span<{
  props: Pick<CircleButtonRequiredStyleProps, "size">;
}>`
  font-size: ${({ props, theme }): string =>
    theme.CircleButton.title.size[props.size]};
`;
