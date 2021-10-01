export default class QuestionModel {
  #id: number;
  #command: string;
  #answers: any[];
  #correct: boolean;
  //   #answered: boolean;

  constructor(id: number, command: string, answers: any[], correct = false) {
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
}
