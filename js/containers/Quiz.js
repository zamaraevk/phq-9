import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { onAnswerSubmit } from '../actions/index'
import Question from '../components/Question'
import AnswerOption from '../components/AnswerOption'

class Quiz extends Component {
  // map array of answers
  createAnswerOptions () {
    return this.props.answers.map((options) => {
      return (
        <AnswerOption
          answer={options.answer}
          key={options.value}
          value={options.value}
          onAnswerSubmit={this.props.onAnswerSubmit} />
        )
    })
  }
  render () {
    const currentQuestion = this.props.currentQuestion
    return (
      <div className='container'>
        <div className='questions'>
          <Question question={this.props.questions[currentQuestion]} />
          <ul className='answers'>
            {this.createAnswerOptions()}
          </ul>
        </div>
      </div>
    )
  }
}
// Prop validation
const { number, array, func } = React.PropTypes

Quiz.propTypes = {
  onAnswerSubmit: func.isRequired,
  currentQuestion: number,
  answers: array.isRequired,
  questions: array.isRequired
}
// Access to global state properties. Use as a props.
function mapStateToProps (state) {
  return {
    answers: state.answers,
    questions: state.questions,
    currentQuestion: state.quiz.questionId
  }
}
// use Action Creators as props
function mapDispatchToProps (dispatch) {
  return bindActionCreators({onAnswerSubmit: onAnswerSubmit}, dispatch)
}
// Connect your componet to global state object
export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
