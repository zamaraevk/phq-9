import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { onAnswerSubmit } from '../actions/index'
import Question from '../components/Question'
import AnswerOption from '../components/AnswerOption'

class Quiz extends Component {

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
          <ul className='answers'>
            <Question question={this.props.questions[currentQuestion]} />
            {this.createAnswerOptions()}
          </ul>
        </div>
      </div>
    )
  }
}

const { number, array, func } = React.PropTypes

Quiz.propTypes = {
  answersCount: number.isRequired,
  onAnswerSubmit: func.isRequired,
  currentQuestion: number,
  answers: array.isRequired,
  questions: array.isRequired
}

function mapStateToProps (state) {
  return {
    answers: state.answers,
    questions: state.questions,
    currentQuestion: state.currentQuestion.questionId,
    answersCount: state.currentQuestion.answersCount

  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({onAnswerSubmit: onAnswerSubmit}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
