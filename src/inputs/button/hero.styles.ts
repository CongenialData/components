import { css, keyframes } from "styled-components/macro";
import { TComponentStatus } from "../../theming";

export const HeroButtonStyle = (
  status: TComponentStatus,
  pulse: boolean
) => css`
  ${({ theme }) => {
    const leftColor = theme.Button.appearance.hero[status].leftBackgroundColor;
    const rightColor =
      theme.Button.appearance.hero[status].rightBackgroundColor;
    const bevel = `${theme.Button.appearance.hero.bevelSize} ${theme.Button.appearance.hero[status].bevelColor}`;
    const glow = `${theme.Button.appearance.hero.glowSize} ${theme.Button.appearance.hero[status].glowColor}`;
    const { shadow } = theme.Button.appearance.hero;
    const heroBoxShadows = `${bevel}, ${glow}, ${shadow}`;

    const pulseAnimation = () => {
      const anim = keyframes`
        0% {
          box-shadow: none;
          opacity: 0.3;
        }

        100% {
          box-shadow: 0 0 1rem 0 ${leftColor};
          opacity: 0.8;
        }
      `;

      return css`
        animation: ${anim} 0.75s infinite alternate;
      `;
    };

    return css`
      text-shadow: ${theme.Button.appearance.hero.textShadow};
      text-transform: ${theme.Button.appearance.hero.textTransform};

      background-image: linear-gradient(to right, ${leftColor}, ${rightColor});
      border: none;
      box-shadow: ${heroBoxShadows};
      color: ${theme.Button.appearance.hero[status].textColor};

      &:focus {
        ${() => {
          const leftFocusColor =
            theme.Button.appearance.hero[status].focusLeftBackgroundColor;
          const rightFocusColor =
            theme.Button.appearance.hero[status].focusRightBackgroundColor;

          return css`
            background-image: linear-gradient(
              to right,
              ${leftFocusColor},
              ${rightFocusColor}
            );
            box-shadow: ${heroBoxShadows},
              0 0 0 ${theme.Button.appearance.hero.outlineWidth}
                ${theme.Button.appearance.hero.outlineColor};
          `;
        }};
      }

      &:hover {
        ${() => {
          const leftHoverColor =
            theme.Button.appearance.hero[status].hoverLeftBackgroundColor;
          const rightHoverColor =
            theme.Button.appearance.hero[status].hoverRightBackgroundColor;

          return css`
            background-image: linear-gradient(
              to right,
              ${leftHoverColor},
              ${rightHoverColor}
            );
          `;
        }}
      }

      &:active {
        ${() => {
          const leftActiveColor =
            theme.Button.appearance.hero[status].activeLeftBackgroundColor;
          const rightActiveColor =
            theme.Button.appearance.hero[status].activeRightBackgroundColor;

          return css`
            background-image: linear-gradient(
              to right,
              ${leftActiveColor},
              ${rightActiveColor}
            );
          `;
        }};
      }

      &[disabled] {
        ${() => {
          return css`
            background-color: ${theme.Button.appearance.hero[status]
              .disabledBackgroundColor};
            background-image: none;
            color: ${theme.Button.appearance.hero[status].disabledTextColor};
          `;
        }};
      }

      /**
       * Add a pulse animation
       */
      ${pulse && pulseAnimation()}
    `;
  }};
`;
