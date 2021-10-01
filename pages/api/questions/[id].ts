import questions from "../questionsBase";

export default function handler(req, res) {
  res.status(200).json(questions[0]);
}
