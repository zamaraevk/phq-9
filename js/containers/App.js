import React, { Component } from 'react'
import { connect } from 'react-redux'

import Quiz from './Quiz'
import Result from './Result'
import Header from '../components/Header'

class App extends Component {

 // function to render Quiz component
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
  // if no more questions -> render Result
  render () {
    return (
      <div className="wrapper-app">
        <Header answersCount={this.props.answersCount} />
        {this.props.currentQuestion > this.props.questions.length - 1 ? this.renderResult() : this.renderQuiz()}
      </div>
    )
  }
}
// Prop validation
const { number, array } = React.PropTypes

App.propTypes = {
  answersCount: number.isRequired,
  currentQuestion: number.isRequired,
  questions: array.isRequired
}
// Access to global state properties. Use as a props.
function mapStateToProps (state) {
  return {
    questions: state.questions,
    currentQuestion: state.quiz.questionId,
    answersCount: state.quiz.answersCount
  }
}
// Connect your componet to global state object
export default connect(mapStateToProps)(App)
