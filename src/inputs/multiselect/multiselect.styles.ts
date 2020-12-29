import styled, { css } from "styled-components/macro";
import { Chip } from "../../chip";
import { Text } from "../../chip/chip.styles";
import { DialogBox } from "../../dialogbox";

export const StyledDialogBox = styled(DialogBox)`
  input[type="checkbox"] {
    margin-right: 1rem;
  }
`;

export const StyledMultiSelect = styled.div``;

export const StyledChip = styled(Chip)``;

export const AddChip = styled(Chip)`
  ${({ disabled, theme: { MultiSelect } }) => css`
    background: ${MultiSelect.add.backgroundColor};

    ${Text} {
      color: ${MultiSelect.add.textColor};
    }

    ${!disabled &&
    css`
      &:hover {
        background: ${MultiSelect.add.hoverBackgroundColor};

        ${Text} {
          color: ${MultiSelect.add.textColor};
        }
      }
    `};
  `};
`;

export const HiddenSelect = styled.select`
  display: block;
  position: absolute;
  height: 0;
  visibility: hidden;
  border: none;

  option {
    padding: 0;
    margin: 0;
    border: none;
  }
`;
export const Display = styled.div`
  display: flex;
  font-size: 0.8rem;
`;
