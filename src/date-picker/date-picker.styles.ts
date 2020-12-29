import styled from "styled-components/macro";

import {
  DatePickerOptionalStyleProps,
  DatePickerRequiredStyleProps,
} from "./date-picker.interfaces";
import { DialogBox } from "../dialogbox/";

export const StyledDatePicker = styled.div<
  Omit<DatePickerRequiredStyleProps, "status"> & DatePickerOptionalStyleProps
>``;

export const StyledDialogBox = styled(DialogBox)`
  padding: 0;
  width: auto;
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSelect = styled.select`
  font-size: ${({ theme }) => theme.typography.TEXT_SUBTITLE_FONT_SIZE};
  font-weight: ${({ theme }) => theme.typography.TEXT_SUBTITLE_FONT_WEIGHT};
  line-height: ${({ theme }) => theme.typography.TEXT_SUBTITLE_LINE_HEIGHT};

  background-color: ${({ theme }) => theme.colors.BACKGROUND_BASIC_COLOR_2};
  border-color: ${({ theme }) => theme.colors.BORDER_BASIC_COLOR_4};
  color: ${({ theme }) => theme.colors.TEXT_BASIC_COLOR};
  padding: 0.58rem;
`;
