// References
// https://styled-components.com/docs/tooling#babel-plugin
// https://styled-components.com/docs/tooling#babel-macro

export default {
  styledComponents: {
    /**
     * Due to how styled components are transpiled and constructed, by default minifiers cannot properly
     * perform dead code elimination on them because they are assumed to have side effects. However, there
     * is a feature that can be enabled to aid this process called "pure annotation".
     */
    pure: true,

    /**
     * Two types of minifications are performed by this plugin: one removes all whitespace & comments
     * from your CSS and the other transpiles tagged template literals, keeping valuable bytes out
     * of your bundles.
     */
    minify: true,

    /**
     * By default, the displayName of a component will be prefixed with the filename in order to
     * make the component name as unique as possible.
     *
     * You can force the component displayName to be solely the component name by disabling the fileName option.
     */
    fileName: true,

    /**
     * This option enhances the attached CSS class name on each component with richer output to help identify
     * your components in the DOM without React DevTools. In your page source you'll see: <button class="Button-asdf123 asdf123" />
     * instead of just <button class="asdf123" />.
     *
     * It also allows you to see the component's displayName in React DevTools. For example, consider writing
     * a styled component that renders a button element, called MyButton. It will normally show up in DevTools
     * as styled.button, but with the displayName option enabled, it has the name you gave it: MyButton.
     *
     * This makes it easier to find your components and to figure out where they live in your app.
     */
    displayName: true,
  },
}
