import React, { Component } from 'react'
import { connect } from 'react-redux'

import Quiz from './Quiz'
import Result from './Result'

class App extends Component {

  renderQuiz () {
    return (
      <Quiz />
   )
  }
  // function to render Result component
  renderResult () {
    return (
      <Result quizResult={this.props.answersCount} />
        )
  }
  // in Total(this.state.answerCount) show current sum of answer values
  render () {
    return (
      <div className="wrapper-app">
        <div className="app-header">
          <h2>PHQ-9 Total: {this.props.answersCount}/27</h2>
          <p className="subtitle">Over the last two weeks, how often have you been bothered by any of the following problems?</p>
        </div>
        {this.props.currentQuestion > this.props.questions.length - 1 ? this.renderResult() : this.renderQuiz()}
      </div>
    )
  }
}

const { number, array } = React.PropTypes

App.propTypes = {
  answersCount: number.isRequired,
  currentQuestion: number.isRequired,
  questions: array.isRequired
}

function mapStateToProps (state) {
  return {
    questions: state.questions,
    currentQuestion: state.currentQuestion.questionId,
    answersCount: state.currentQuestion.answersCount
  }
}

export default connect(mapStateToProps)(App)
