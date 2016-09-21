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
      result: 0
    }
  },
  componentWillMount () {
    this.setState({
      questions: data.questions,
      currentQuestion: data.questions[0],
      answers: data.answers
    })
  },
  onAnswerSubmit (e) {
    const target = Number(e.currentTarget.value)
    const answersCount = target + this.state.answersCount

    this.setState({
      answersCount: answersCount
    })
    if (this.state.questionId < this.state.questions.length - 1) {
      this.setNextQuestion()
    } else {
      this.resultLogic(answersCount)
    }
  },
  setNextQuestion () {
    const questionId = this.state.questionId + 1

    this.setState({
      questionId: questionId,
      currentQuestion: this.state.questions[questionId]
    })
  },
  resultLogic (result) {
    // Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.
    if (result < 4) this.showResult(result)
    else if (result <= 9) this.showResult(result)
    else this.showResult(result)
  },
  showResult (result) {
    this.setState({
      result: result
    })
  },
  renderQuiz () {
    return (
      <Quiz
        question={this.state.currentQuestion}
        answers={this.state.answers}
        onAnswerSubmit={this.onAnswerSubmit}
     />
   )
  },
  renderResult () {
    return (
      <Result quizResult={this.state.result} />
        )
  },
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h2>PHQ-9 {this.state.answersCount}</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
