class Survey {}
class Question {}



export class QuestionGroup {
  constructor(
    public createdAt: string,
    public updatedAt: string,
    public survey: Survey,
    public questionGroup: QuestionGroup | undefined,
    public children: Question | QuestionGroup,
    public parentQuestionGroup?: QuestionGroup
  ) {}
}
