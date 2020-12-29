import { createGlobalStyle } from "styled-components/macro";

export const Normalize = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  /**
   * Make sure the website is using full height
   */

  html, body, #root { 
    height: 100vh;
  }

  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /**
  * Remove the margin in all browsers.
  */

  body {
    margin: 0;

    /** If you tap and hold on an element in the iOS browser, it will open a callout menu (like the one above.) To disable this effect on iOS, set the -webkit-touch-callout property to none for the desired elements. Again, to disable the effect for all elements, assign the property to your body element. */
    -webkit-touch-callout: none;
  }

  /**
   * Correct the font size and margin on h1 elements within section and
   * article contexts in Chrome, Firefox, and Safari.
   */

  /* h1 {
    font-size: 2em;
    margin: 0.67em 0;
  } */

  /**
  * 1. Add the correct box sizing in Firefox.
  * 2. Show the overflow in Edge and IE.
  */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
  * 1. Correct the inheritance and scaling of font size in all browsers.
  * 2. Correct the odd em font sizing in all browsers.
  */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
  * Remove the gray background on active links in IE 10.
  */

  a {
    background-color: transparent;
  }

  /**
  * 1. Remove the bottom border in Chrome 57-
  * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
  */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
  * Add the correct font weight in Chrome, Edge, and Safari.
  */

  b,
  strong {
    font-weight: bolder;
  }

  /**
  * 1. Correct the inheritance and scaling of font size in all browsers.
  * 2. Correct the odd em font sizing in all browsers.
  */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
  * Add the correct font size in all browsers.
  */

  small {
    font-size: 80%;
  }

  /**
  * Prevent sub and sup elements from affecting the line height in
  * all browsers.
  */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /**
  * Remove the border on images inside links in IE 10.
  */

  img {
    border-style: none;
  }

  /**
  * 1. Change the font styles in all browsers.
  * 2. Remove the margin in Firefox and Safari.
  */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
  * Show the overflow in IE.
  * 1. Show the overflow in Edge.
  */

  button,
  input { /* 1 */
    overflow: visible;
  }

  /**
  * Remove the inheritance of text transform in Edge, Firefox, and IE.
  * 1. Remove the inheritance of text transform in Firefox.
  */

  button,
  select { /* 1 */
    text-transform: none;
  }

  /**
  * Correct the inability to style clickable types in iOS and Safari.
  */

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  /**
  * Remove the inner border and padding in Firefox.
  */

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
  * Restore the focus styles unset by the previous rule.
  */

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
  * Correct the padding in Firefox.
  */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
  * 1. Correct the text wrapping in Edge and IE.
  * 2. Correct the color inheritance from fieldset elements in IE.
  * 3. Remove the padding so developers are not caught out when they zero out
  *    fieldset elements in all browsers.
  */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
  * Add the correct vertical alignment in Chrome, Firefox, and Opera.
  */

  progress {
    vertical-align: baseline;
  }

  /**
  * Remove the default vertical scrollbar in IE 10+.
  */

  textarea {
    overflow: auto;
  }

  /**
  * 1. Add the correct box sizing in IE 10.
  * 2. Remove the padding in IE 10.
  */

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
  * Correct the cursor style of increment and decrement buttons in Chrome.
  */

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  /**
  * 1. Correct the odd appearance in Chrome and Safari.
  * 2. Correct the outline style in Safari.
  */

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
  * Remove the inner padding in Chrome and Safari on macOS.
  */

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
  * 1. Correct the inability to style clickable types in iOS and Safari.
  * 2. Change font properties to inherit in Safari.
  */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /*
  * Add the correct display in Edge, IE 10+, and Firefox.
  */

  details {
    display: block;
  }

  /*
  * Add the correct display in all browsers.
  */

  summary {
    display: list-item;
  }

  /**
  * Add the correct display in IE 10+.
  */

  template {
    display: none;
  }

  /**
  * Add the correct display in IE 10.
  */

  [hidden] {
    display: none;
  }

  html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /**
   * Values inherited from theme defaults or theme overrides
   */

   body {
     color: ${({ theme }) => theme.colors.TEXT_BASIC_COLOR};
     font-family: ${({ theme }) => theme.typography.TEXT_PARAGRAPH_FONT_FAMILY};
     font-size: ${({ theme }) => theme.typography.TEXT_PARAGRAPH_FONT_SIZE};
     font-weight: ${({ theme }) => theme.typography.TEXT_PARAGRAPH_FONT_WEIGHT};
     line-height: ${({ theme }) => theme.typography.TEXT_PARAGRAPH_LINE_HEIGHT};
   }

   h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.TEXT_BASIC_COLOR};
  }

  p {
    color: ${({ theme }) => theme.colors.TEXT_BASIC_COLOR};
    font-family: ${({ theme }) => theme.typography.TEXT_PARAGRAPH_FONT_FAMILY};
    font-size: ${({ theme }) => theme.typography.TEXT_PARAGRAPH_FONT_SIZE};
    font-weight: ${({ theme }) => theme.typography.TEXT_PARAGRAPH_FONT_WEIGHT};
    line-height: ${({ theme }) => theme.typography.TEXT_PARAGRAPH_LINE_HEIGHT};
  }


/**
 * FIXME: How should we implement this? 
 * https://github.com/akveo/nebular/blob/af2e674f6b71ecc0e7b6790c9312fbecc8c1e28c/src/framework/theme/styles/global/typography/_typography.scss#L62
 *
 * link-text-color: text-primary-color,
 * link-text-decoration: underline,
 * link-text-focus-color: text-primary-focus-color,
 * link-text-hover-color: text-primary-hover-color,
 *
 *  a {
 *   color: ;
 *   text-decoration: ;
 *   font-size: inherit;
 *   font-style: inherit;
 *   font-weight: inherit;
 *   line-height: inherit;
 *
 *   &:focus {
 *     color: ;
 *   }
 *
 *   &:hover {
 *     color:;
 *   }
 *
 *   &.link-control,
 *   &.link-control:hover {
 *     color:;
 *   }
 *
 *   &.link-alternate,
 *   &.link-alternate:hover {
 *     color:;
 *   }
 * }
 */
`;
