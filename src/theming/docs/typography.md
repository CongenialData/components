# Typography

The main goal of typography is to describe how design is applied to letters and text. CDAB Typography is based on
[Eva Design System](https://hubs.ly/H0n4RGn0) specification.

## Font Family

CDAB theme contains two font-family properties:

- **font-family-primary** - utilized by all text elements on the page
- **font-family-secondary** - utilized by heading elements (`<h1>`, `<h2>`, etc)

By default both font-family-primary and font-family-secondary use `'Open Sans, sans-serif'` font family names.

<hr>****

## NOT CORRECT - Colors

**THIS SECTION NEEDS AN UPDATE!**

There are 5 text colors available within the Design System:

- **text-basic-color** - main text color, should be used on top of basic backgrounds, usually cards, sidebars, headers,
  available as `.text-basic` CSS class
- **text-alternate-color** - alternative color used on top of alternate backgrounds - colored headers, sidebars,
  available as `.text-alternate` CSS class
- **text-control-color** - should we used as a text color for status backgrounds (`success`, `primary`, etc) - usually
  buttons, selects , available as `.text-control` CSS class
- **text-disabled-color** - indicates text disabled state, available as `.text-disabled` CSS class
- **text-hint-color** - used by secondary texts - captions, placeholders, labels, available as `.text-hint` CSS class
  <hr>

## NOT CORRECT - Text Styles

**THIS SECTION NEEDS AN UPDATE!**

CDAB typography consist of 14 text styles, where text styles is a combination of `font-size`, `font-weight`,
`line-height` and `font-family` properties:

- **6 heading** styles, used by `<h1>`-`<h6>` elements, also available as CSS classes `.h1`, `.h2` ... `.h6`
- **2 subtitle** styles, used as a text for most of the controls (inputs, menus, etc) with classes `.subtitle`,
  `.subtitle-2`
- **2 paragraph** styles for regular text and `<p>` element, with classes `.paragraph`, `.paragraph-2`
- **2 caption** styles for smaller text like tooltips and input captions, with classes `.caption`, `.caption-2`
- **label** style, used by `<label>` element as available as `.label` CSS class
- **button** text style, used by button element
  <hr>

## NOT CORRECT - Apply text styles classes and properties

**THIS SECTION NEEDS AN UPDATE!**

All of the text styles could be applied by simply adding CSS classes to an element:

```html
<input type="email" name="email" /> <span class="caption-2 text-hint">Work email address</span>
```

Here we added both `caption-2` and `text-hint` making the span to be a caption with a hint text color.

Colors and fonts are also available as theme properties using `nb-theme()` SCSS function:

```scss
.my-text {
  font-family: nb-theme(font-family-primary);
  color: nb-theme(text-basic-color);
}
```

<hr>

## NOT CORRECT - Customize Typography styles

**THIS SECTION NEEDS AN UPDATE!**

All text styles and colors are available as [Nebular Theme](docs/design-system/design-system-theme) properties. This
means that all styles could be easily customized by changing theme variables:

```scss
text-caption-font-family: font-family-primary,
text-caption-font-size: 0.75rem,
text-caption-font-weight: 400,
text-caption-line-height: 1rem,
```

Complete list of typography variables could be find at [Default Theme Variables](docs/design-system/default-theme) page.

<hr>

## Related Articles

- [Enable Theme Customization](docs/design-system/enable-customizable-theme)
- [Create Custom Theme](docs/design-system/create-custom-theme)
- [Default Theme Variables](docs/design-system/default-theme)
- [Use Theme Variables](docs/design-system/use-theme-variables)
- [Create Custom Theme](docs/design-system/create-custom-theme)
