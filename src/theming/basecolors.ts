// The contents of this file is based on https://github.com/akveo/nebular/blob/master/src/framework/theme/styles/themes/_default.scss
import json from "./themes/default.json";

/**
 * Definition of all theme colors
 *
 * This list of colors is mapped to Component variables in theming/colors.ts
 */

/**
 * Status colors: primary, success, info, warning, danger - for colored elements (buttons, etc)
 */
//#region
const COLOR_PRIMARY_100 = json["color-primary-100"];
const COLOR_PRIMARY_200 = json["color-primary-200"];
const COLOR_PRIMARY_300 = json["color-primary-300"];
const COLOR_PRIMARY_400 = json["color-primary-400"];
const COLOR_PRIMARY_500 = json["color-primary-500"];
const COLOR_PRIMARY_600 = json["color-primary-600"];
const COLOR_PRIMARY_700 = json["color-primary-700"];
const COLOR_PRIMARY_800 = json["color-primary-800"];
const COLOR_PRIMARY_900 = json["color-primary-900"];

const COLOR_PRIMARY_TRANSPARENT_100 = json["color-primary-transparent-100"];
const COLOR_PRIMARY_TRANSPARENT_200 = json["color-primary-transparent-200"];
const COLOR_PRIMARY_TRANSPARENT_300 = json["color-primary-transparent-300"];
const COLOR_PRIMARY_TRANSPARENT_400 = json["color-primary-transparent-400"];
const COLOR_PRIMARY_TRANSPARENT_500 = json["color-primary-transparent-500"];
const COLOR_PRIMARY_TRANSPARENT_600 = json["color-primary-transparent-600"];

const COLOR_SUCCESS_100 = json["color-success-100"];
const COLOR_SUCCESS_200 = json["color-success-200"];
const COLOR_SUCCESS_300 = json["color-success-300"];
const COLOR_SUCCESS_400 = json["color-success-400"];
const COLOR_SUCCESS_500 = json["color-success-500"];
const COLOR_SUCCESS_600 = json["color-success-600"];
const COLOR_SUCCESS_700 = json["color-success-700"];
const COLOR_SUCCESS_800 = json["color-success-800"];
const COLOR_SUCCESS_900 = json["color-success-900"];

const COLOR_SUCCESS_TRANSPARENT_100 = json["color-success-transparent-100"];
const COLOR_SUCCESS_TRANSPARENT_200 = json["color-success-transparent-200"];
const COLOR_SUCCESS_TRANSPARENT_300 = json["color-success-transparent-300"];
const COLOR_SUCCESS_TRANSPARENT_400 = json["color-success-transparent-400"];
const COLOR_SUCCESS_TRANSPARENT_500 = json["color-success-transparent-500"];
const COLOR_SUCCESS_TRANSPARENT_600 = json["color-success-transparent-600"];

const COLOR_INFO_100 = json["color-info-100"];
const COLOR_INFO_200 = json["color-info-200"];
const COLOR_INFO_300 = json["color-info-300"];
const COLOR_INFO_400 = json["color-info-400"];
const COLOR_INFO_500 = json["color-info-500"];
const COLOR_INFO_600 = json["color-info-600"];
const COLOR_INFO_700 = json["color-info-700"];
const COLOR_INFO_800 = json["color-info-800"];
const COLOR_INFO_900 = json["color-info-900"];

const COLOR_INFO_TRANSPARENT_100 = json["color-info-transparent-100"];
const COLOR_INFO_TRANSPARENT_200 = json["color-info-transparent-200"];
const COLOR_INFO_TRANSPARENT_300 = json["color-info-transparent-300"];
const COLOR_INFO_TRANSPARENT_400 = json["color-info-transparent-400"];
const COLOR_INFO_TRANSPARENT_500 = json["color-info-transparent-500"];
const COLOR_INFO_TRANSPARENT_600 = json["color-info-transparent-600"];

const COLOR_WARNING_100 = json["color-warning-100"];
const COLOR_WARNING_200 = json["color-warning-200"];
const COLOR_WARNING_300 = json["color-warning-300"];
const COLOR_WARNING_400 = json["color-warning-400"];
const COLOR_WARNING_500 = json["color-warning-500"];
const COLOR_WARNING_600 = json["color-warning-600"];
const COLOR_WARNING_700 = json["color-warning-700"];
const COLOR_WARNING_800 = json["color-warning-800"];
const COLOR_WARNING_900 = json["color-warning-900"];

const COLOR_WARNING_TRANSPARENT_100 = json["color-warning-transparent-100"];
const COLOR_WARNING_TRANSPARENT_200 = json["color-warning-transparent-200"];
const COLOR_WARNING_TRANSPARENT_300 = json["color-warning-transparent-300"];
const COLOR_WARNING_TRANSPARENT_400 = json["color-warning-transparent-400"];
const COLOR_WARNING_TRANSPARENT_500 = json["color-warning-transparent-500"];
const COLOR_WARNING_TRANSPARENT_600 = json["color-warning-transparent-600"];

const COLOR_DANGER_100 = json["color-danger-100"];
const COLOR_DANGER_200 = json["color-danger-200"];
const COLOR_DANGER_300 = json["color-danger-300"];
const COLOR_DANGER_400 = json["color-danger-400"];
const COLOR_DANGER_500 = json["color-danger-500"];
const COLOR_DANGER_600 = json["color-danger-600"];
const COLOR_DANGER_700 = json["color-danger-700"];
const COLOR_DANGER_800 = json["color-danger-800"];
const COLOR_DANGER_900 = json["color-danger-900"];

const COLOR_DANGER_TRANSPARENT_100 = json["color-danger-transparent-100"];
const COLOR_DANGER_TRANSPARENT_200 = json["color-danger-transparent-200"];
const COLOR_DANGER_TRANSPARENT_300 = json["color-danger-transparent-300"];
const COLOR_DANGER_TRANSPARENT_400 = json["color-danger-transparent-400"];
const COLOR_DANGER_TRANSPARENT_500 = json["color-danger-transparent-500"];
const COLOR_DANGER_TRANSPARENT_600 = json["color-danger-transparent-600"];
//#endregion

/**
 * Basic colors - for backgrounds and borders and texts
 */
//#region
const COLOR_BASIC_100 = "#ffffff";
const COLOR_BASIC_200 = "#f7f9fc";
const COLOR_BASIC_300 = "#edf1f7";
const COLOR_BASIC_400 = "#e4e9f2";
const COLOR_BASIC_500 = "#c5cee0";
const COLOR_BASIC_600 = "#8f9bb3";
const COLOR_BASIC_700 = "#2e3a59";
const COLOR_BASIC_800 = "#222b45";
const COLOR_BASIC_900 = "#192038";
const COLOR_BASIC_1000 = "#151a30";
const COLOR_BASIC_1100 = "#101426";

const COLOR_BASIC_TRANSPARENT_100 = "rgba(143, 155, 179, 0.08)";
const COLOR_BASIC_TRANSPARENT_200 = "rgba(143, 155, 179, 0.16)";
const COLOR_BASIC_TRANSPARENT_300 = "rgba(143, 155, 179, 0.24)";
const COLOR_BASIC_TRANSPARENT_400 = "rgba(143, 155, 179, 0.32)";
const COLOR_BASIC_TRANSPARENT_500 = "rgba(143, 155, 179, 0.4)";
const COLOR_BASIC_TRANSPARENT_600 = "rgba(143, 155, 179, 0.48)";

const COLOR_BASIC_CONTROL_TRANSPARENT_100 = "rgba(255, 255, 255, 0.08)";
const COLOR_BASIC_CONTROL_TRANSPARENT_200 = "rgba(255, 255, 255, 0.16)";
const COLOR_BASIC_CONTROL_TRANSPARENT_300 = "rgba(255, 255, 255, 0.24)";
const COLOR_BASIC_CONTROL_TRANSPARENT_400 = "rgba(255, 255, 255, 0.32)";
const COLOR_BASIC_CONTROL_TRANSPARENT_500 = "rgba(255, 255, 255, 0.4)";
const COLOR_BASIC_CONTROL_TRANSPARENT_600 = "rgba(255, 255, 255, 0.48)";
//#endregion

export const BASE_COLORS = {
  COLOR_PRIMARY_100,
  COLOR_PRIMARY_200,
  COLOR_PRIMARY_300,
  COLOR_PRIMARY_400,
  COLOR_PRIMARY_500,
  COLOR_PRIMARY_600,
  COLOR_PRIMARY_700,
  COLOR_PRIMARY_800,
  COLOR_PRIMARY_900,
  COLOR_PRIMARY_TRANSPARENT_100,
  COLOR_PRIMARY_TRANSPARENT_200,
  COLOR_PRIMARY_TRANSPARENT_300,
  COLOR_PRIMARY_TRANSPARENT_400,
  COLOR_PRIMARY_TRANSPARENT_500,
  COLOR_PRIMARY_TRANSPARENT_600,
  COLOR_SUCCESS_100,
  COLOR_SUCCESS_200,
  COLOR_SUCCESS_300,
  COLOR_SUCCESS_400,
  COLOR_SUCCESS_500,
  COLOR_SUCCESS_600,
  COLOR_SUCCESS_700,
  COLOR_SUCCESS_800,
  COLOR_SUCCESS_900,
  COLOR_SUCCESS_TRANSPARENT_100,
  COLOR_SUCCESS_TRANSPARENT_200,
  COLOR_SUCCESS_TRANSPARENT_300,
  COLOR_SUCCESS_TRANSPARENT_400,
  COLOR_SUCCESS_TRANSPARENT_500,
  COLOR_SUCCESS_TRANSPARENT_600,
  COLOR_INFO_100,
  COLOR_INFO_200,
  COLOR_INFO_300,
  COLOR_INFO_400,
  COLOR_INFO_500,
  COLOR_INFO_600,
  COLOR_INFO_700,
  COLOR_INFO_800,
  COLOR_INFO_900,
  COLOR_INFO_TRANSPARENT_100,
  COLOR_INFO_TRANSPARENT_200,
  COLOR_INFO_TRANSPARENT_300,
  COLOR_INFO_TRANSPARENT_400,
  COLOR_INFO_TRANSPARENT_500,
  COLOR_INFO_TRANSPARENT_600,
  COLOR_WARNING_100,
  COLOR_WARNING_200,
  COLOR_WARNING_300,
  COLOR_WARNING_400,
  COLOR_WARNING_500,
  COLOR_WARNING_600,
  COLOR_WARNING_700,
  COLOR_WARNING_800,
  COLOR_WARNING_900,
  COLOR_WARNING_TRANSPARENT_100,
  COLOR_WARNING_TRANSPARENT_200,
  COLOR_WARNING_TRANSPARENT_300,
  COLOR_WARNING_TRANSPARENT_400,
  COLOR_WARNING_TRANSPARENT_500,
  COLOR_WARNING_TRANSPARENT_600,
  COLOR_DANGER_100,
  COLOR_DANGER_200,
  COLOR_DANGER_300,
  COLOR_DANGER_400,
  COLOR_DANGER_500,
  COLOR_DANGER_600,
  COLOR_DANGER_700,
  COLOR_DANGER_800,
  COLOR_DANGER_900,
  COLOR_DANGER_TRANSPARENT_100,
  COLOR_DANGER_TRANSPARENT_200,
  COLOR_DANGER_TRANSPARENT_300,
  COLOR_DANGER_TRANSPARENT_400,
  COLOR_DANGER_TRANSPARENT_500,
  COLOR_DANGER_TRANSPARENT_600,
  COLOR_BASIC_100,
  COLOR_BASIC_200,
  COLOR_BASIC_300,
  COLOR_BASIC_400,
  COLOR_BASIC_500,
  COLOR_BASIC_600,
  COLOR_BASIC_700,
  COLOR_BASIC_800,
  COLOR_BASIC_900,
  COLOR_BASIC_1000,
  COLOR_BASIC_1100,
  COLOR_BASIC_TRANSPARENT_100,
  COLOR_BASIC_TRANSPARENT_200,
  COLOR_BASIC_TRANSPARENT_300,
  COLOR_BASIC_TRANSPARENT_400,
  COLOR_BASIC_TRANSPARENT_500,
  COLOR_BASIC_TRANSPARENT_600,
  COLOR_BASIC_CONTROL_TRANSPARENT_100,
  COLOR_BASIC_CONTROL_TRANSPARENT_200,
  COLOR_BASIC_CONTROL_TRANSPARENT_300,
  COLOR_BASIC_CONTROL_TRANSPARENT_400,
  COLOR_BASIC_CONTROL_TRANSPARENT_500,
  COLOR_BASIC_CONTROL_TRANSPARENT_600,
};

export type TBaseColors = typeof BASE_COLORS;

/**
 * Type used allowing user to create a typed override object for colors in theme.
 *
 * Code sample:
 *
 * ```ts
 * const customBaseColors: TCustomBaseColors = {
 *   COLOR_BASIC_500 = 'red'
 * }
 *
 * const theme = createTheme([Button, Card], {
 *   baseColors: customBaseColors
 *   Button: { background: 'green' },
 *   Card: { color: 'red' }
 * })
 * ```
 */
export type TCustomBaseColors = Partial<TBaseColors>;
