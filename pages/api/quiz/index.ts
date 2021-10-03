import questions from "../questionsBase";

export default (req, res) => {
  res.status(200).json(questions.map((question) => question.id));
};
