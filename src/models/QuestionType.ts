export const QUESTION_TYPES = {
  date: "date",
  datetime: "datetime",
  displayOnly: "display_only",
  multipleChoice: "multiple_choice",
  number: "number",
  singleChoice: "single_choice",
  text: "text",
  time: "time"
};

export const QUESTION_SUBTYPES = {
  date: "date",
  datetime: "datetime",
  dropdown: "dropdown",
  horizontalList: "horizontal_list",
  image: "image",
  markdown: "markdown",
  multiLine: "multi_line",
  number: "number",
  singleLine: "single_line",
  time: "time",
  verticalList: "vertical_list"
};

export type QuestionType = keyof typeof QUESTION_TYPES;
export type QuestionSubtype = keyof typeof QUESTION_SUBTYPES;
