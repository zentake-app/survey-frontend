import { QuestionType, QuestionSubtype } from './QuestionType'
export class Question {
  constructor(
    public id: string,
    public createdAt: Date | undefined,
    public updatedAt: Date | undefined,
    public surveyId: string | undefined,
    public questionGroupId: string,
    public position: number | undefined,
    public helpText: string,
    public language: string,
    public questionType: keyof QuestionType,
    public required: boolean,
    public visible: boolean
  ) {}

}
