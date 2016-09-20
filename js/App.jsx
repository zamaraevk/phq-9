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
    this.setNextQuestion()
  },
  setNextQuestion () {
    const questionId = this.state.questionId + 1

    this.setState({
      questionId: questionId,
      currentQuestion: this.state.questions[questionId]
    })
  },
  renderQuiz () {
    return (
      <Quiz
        questionId={this.state.questionId}
        question={this.state.currentQuestion}
        questionTotal={this.state.questions.length}
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
