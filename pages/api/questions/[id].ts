import questions from "../questionsBase";

export default function handler(req, res) {
  const selectedId = +req.query.id;

  const selectedQuestions = questions.filter(
    (question) => question.id === selectedId
  );

  if (selectedQuestions.length === 1) {
    const selectedQuestion = selectedQuestions[0].shuffleQuestions();
    res.status(200).json(selectedQuestion.toObject());
  } else {
    res.status(204).send();
  }
}
