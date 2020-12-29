# Custom Theme

Nebular har en fil som mappar variabelnamn mot de olika definitionerna av temafärger och storlekar. Vi skulle kunna göra
på liknande sätt, men istället lägger vi det i respektive komponents \*.theme.ts.

I filen nedan kan vi få idéer på hur vi namnger och strukturerar temat.
<https://github.com/akveo/nebular/blob/aee71a73a0a9eb917e04e0f284d74de4e89925f5/src/framework/theme/styles/themes/_mapping.scss>

Exempel på hur en knapp definieras:
<https://github.com/akveo/nebular/blob/master/src/framework/theme/components/button/_button-filled.scss>

## Create a theme

1. Create a folder in `./src` called `theme`.
2. Create a file called `theme.ts`.
3. Import the components you want to style in your theme
4. Use `createTheme()` and pass the imported components as the first parameter
5. Override theme specific styling as the second parameter

### Example

```typescript
import { createTheme } from "../../theming"; // Import theming function

import { Button } from "../inputs/button"; // Import all components you want to use

export const theme = createTheme(
  [Button], // Pass in components in theme
  {
    // Override stuff in theme
    Button: {
      background: "red",
    },
  }
);
```
