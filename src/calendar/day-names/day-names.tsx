import React from "react";

/* Import components here */
import { DayName, DayNamesGrid } from "./day-names.styles";

/* Import utilities here */
import { getDayNames } from "../calendar.utilities";

export const DayNames = (props: { dayTitleLength?: number }): JSX.Element => {
  const { dayTitleLength = 2 } = props;
  // let { extraInfo } = props // NOTE: When should this be used?

  return (
    <DayNamesGrid columns={7}>
      {getDayNames(dayTitleLength).map(
        (dayName, index): JSX.Element => (
          <DayName key={`dayname${index}`}>{dayName}</DayName>
        )
      )}
    </DayNamesGrid>
  );
};
