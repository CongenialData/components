# Anpassningar för CDAB

Temat baserar sig på Nebular, https://github.com/akveo/nebular.

Vår struktur är inspirerad från den, men med en del anpassningar. Nedan följer beskrivningar som underlättar utveckling
av tema och komponenter.

## \_mapping.scss

https://github.com/akveo/nebular/blob/master/src/framework/theme/styles/themes/_mapping.scss

Innehållet är definitionen av komponenternas temavariabler.

Exempel:

```scss
card-background-color: background-basic-color-1;
```

Våra färger definieras i filen `src/components/theme.basecolors.ts`. Där hittas definitionen för
`background-basic-color-1`.

Komponenternas variabler finns istället definierade i respektive komponents tema-fil. I detta fallet hittas ovanstående
kod i `src/components/card/card.theme.ts`.

```typescript
backgroundColor: colors.BACKGROUND_BASIC_COLOR_1,
```

### Problem

Ett problem med strukturen är att i `.scss` kan man referera till variabler deklarerade i samma scope. Detta fungerar
inte för oss i våra temafiler.

**Exempel från \_mapping.scss**

```scss
calendar-text-font-size: text-subtitle-font-size,
....
calendar-cell-hover-text-font-size: calendar-text-font-size,
```

Här definieras variabeln `calendar-text-font-size` och sedan återanvänds den längre ner i samma scope.

I JavaScript kan man inte referera till ett värde i samma objekt.

_Nedanstående fungerar inte_

```typescript
const myObj = {
  firstName: "John",
  lastName: "Doe",
  age: 31,
  nickName: firstname,
};
```

Exempel på lösning i `<Calendar />`

```typescript
  const calendar: any = {
    // FIXME: Use correct type of calendar
    TEXT_FONT_FAMILY: typography.TEXT_SUBTITLE_FONT_FAMILY,
    TEXT_FONT_SIZE: typography.TEXT_SUBTITLE_FONT_SIZE,
    TEXT_FONT_WEIGHT: typography.TEXT_SUBTITLE_FONT_WEIGHT,
    TEXT_LINE_HEIGHT: typography.TEXT_SUBTITLE_LINE_HEIGHT,
    WEEKDAY_TEXT_COLOR: colors.TEXT_HINT_COLOR,
    DAY_CELL_HEIGHT: '2.75rem',
    DAY_CELL_WIDTH: '2.75rem',
    MONTH_CELL_WIDTH: '4.8125rem',
  }
  calendar.WEEKDAY_HEIGHT = calendar.DAY_CELL_HEIGHT
  calendar.MONTH_CELL_HEIGHT = calendar.DAY_CELL_HEIGHT
  calendar.YEAR_CELL_WIDTH = calendar.MONTH_CELL_WIDTH
  calendar.YEAR_CELL_HEIGHT = calendar.MONTH_CELL_HEIGHT
  calendar.WEEKDAY_WIDTH = calendar.DAY_CELL_WIDTH

  return tuple([
    'Calendar',
    {
      width: '20.625rem',
      backgroundColor: colors.BACKGROUND_BASIC_COLOR_1,
      borderColor: colors.BORDER_BASIC_COLOR_4,
      borderStyle: 'solid',
      borderWidth: '0.0625rem',
      borderRadius: support.BORDER_RADIUS,
      textColor: colors.TEXT_BASIC_COLOR,
      textFontFamily: typography.TEXT_SUBTITLE_FONT_FAMILY,
      textFontSize: typography.TEXT_SUBTITLE_FONT_SIZE,
      textFontWeight: typography.TEXT_SUBTITLE_FONT_WEIGHT,
      textLineHeight: typography.TEXT_SUBTITLE_LINE_HEIGHT,
```

_NOTE_: Om det finns ett bättre sätt än detta bör vi implementera det istället.
