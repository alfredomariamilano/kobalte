import { DateDuration } from "@internationalized/date";
import { ValidationState } from "@kobalte/utils";
import { Accessor, createContext, useContext } from "solid-js";

import { Direction, LocalizedMessageFormatter } from "../i18n";
import { CalendarSelectionMode, DateValue } from "./types";

export interface CalendarDataSet {}

export interface CalendarContextValue {
  dataset: Accessor<CalendarDataSet>;
  value: Accessor<DateValue[]>;
  startDate: Accessor<DateValue>;
  endDate: Accessor<DateValue>;
  focusedDate: Accessor<DateValue>;
  visibleDuration: Accessor<DateDuration>;
  selectionMode: Accessor<CalendarSelectionMode>;
  locale: Accessor<string>;
  direction: Accessor<Direction>;
  min: Accessor<DateValue | undefined>;
  max: Accessor<DateValue | undefined>;
  timeZone: Accessor<string>;
  validationState: Accessor<ValidationState | null>;
  messageFormatter: Accessor<LocalizedMessageFormatter>;
  isDisabled: Accessor<boolean>;
  isReadOnly: Accessor<boolean>;
  isCellSelected: (date: DateValue) => boolean;
  isCellFocused: (date: DateValue) => boolean;
  isCellDisabled: (date: DateValue) => boolean;
  isCellUnavailable: (date: DateValue) => boolean;
  isDateInvalid: (date: DateValue) => boolean;
  setStartDate: (date: DateValue) => void;
  setIsFocused: (value: boolean) => void;
  selectFocusedDate: () => void;
  selectDate: (date: DateValue) => void;
  focusCell: (date: DateValue) => void;
  focusNextDay: () => void;
  focusPreviousDay: () => void;
  focusNextPage: () => void;
  focusPreviousPage: () => void;
  focusNextRow: () => void;
  focusPreviousRow: () => void;
  focusSectionStart: () => void;
  focusSectionEnd: () => void;
  focusNextSection: (larger: boolean) => void;
  focusPreviousSection: (larger: boolean) => void;
  getDatesInWeek: (weekIndex: number, from: DateValue) => Array<DateValue | null>;
}

export const CalendarContext = createContext<CalendarContextValue>();

export function useCalendarContext() {
  const context = useContext(CalendarContext);

  if (context === undefined) {
    throw new Error("[kobalte]: `useCalendarContext` must be used within a `Calendar` component");
  }

  return context;
}
