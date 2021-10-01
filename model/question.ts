import AnswerModel from "./answer";

export default class QuestionModel {
  #id: number;
  #command: string;
  #answers: AnswerModel[];
  #correct: boolean;
  //   #answered: boolean;

  constructor(
    id: number,
    command: string,
    answers: AnswerModel[],
    correct = false
  ) {
    this.#id = id;
    this.#command = command;
    this.#answers = answers;
    this.#correct = correct;
  }

  get id() {
    return this.#id;
  }

  get command() {
    return this.#command;
  }

  get answers() {
    return this.#answers;
  }

  get correct() {
    return this.#correct;
  }

  get answered() {
    for (let answer of this.#answers) {
      if (answer.revealed) return true;
    }

    return false;
  }
}
