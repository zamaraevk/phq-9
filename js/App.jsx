const React = require('react')
const ReactDOM = require('react-dom')
const data = require('../public/data')
const Quiz = require('./Quiz')
const Result = require('./Result')

const App = React.createClass({
  getInitialState: function () {
    return {
      questionId: 0,
      questions: [],
      currentQuestion: '',
      answers: [],
      answersCount: 0,
      result: null
    }
  },
  componentWillMount () {
    this.setState({
      questions: data.questions,
      currentQuestion: data.questions[0],
      answers: data.answers
    })
  },
  // on Answer Submit count answer value and load next question or set result
  onAnswerSubmit (e) {
    const target = Number(e.currentTarget.value)
    const answersCount = target + this.state.answersCount

    this.setState({
      answersCount: answersCount
    })
    if (this.state.questionId < this.state.questions.length - 1) {
      this.setNextQuestion()
    } else {
      this.setState({
        result: answersCount
      })
    }
  },
  setNextQuestion () {
    const questionId = this.state.questionId + 1

    this.setState({
      questionId: questionId,
      currentQuestion: this.state.questions[questionId]
    })
  },
  // if result has been updated in state --> function renderResult
  // else --> function renderQuiz
  renderQuiz () {
    return (
      <Quiz
        question={this.state.currentQuestion}
        answers={this.state.answers}
        onAnswerSubmit={this.onAnswerSubmit}
     />
   )
  },
  // function to render Result component
  renderResult () {
    return (
      <Result quizResult={this.state.result} />
        )
  },
  // in Total(this.state.answerCount) show current sum of answer values
  render () {
    return (
      <div className="wrapper-app">
        <div className="app-header">
          <h2>PHQ-9 Total: {this.state.answersCount}/27</h2>
        </div>
        {this.state.result !== null ? this.renderResult() : this.renderQuiz()}
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
