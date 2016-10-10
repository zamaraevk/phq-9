import React from 'react'

// Stateless component. Answer Option
const AnswerOption = (props) => (
  <li
    className="btn"
    value={props.value}
    onClick={props.onAnswerSubmit}
    >{props.answer}</li>
)
// Prop validation
const { number, string, func } = React.PropTypes

AnswerOption.propTypes = {
  onAnswerSubmit: func.isRequired,
  value: number.isRequired,
  answer: string.isRequired
}

export default AnswerOption
