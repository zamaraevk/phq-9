import React from 'react'

// Stateless component. Render list of answers
const AnswerOption = (props) => (
  <li
    className="btn"
    value={props.value}
    onClick={props.onAnswerSubmit}
    >{props.answer}</li>
)

const { number, string, func } = React.PropTypes
// Prop validation
AnswerOption.propTypes = {
  onAnswerSubmit: func.isRequired,
  value: number.isRequired,
  answer: string.isRequired
}

export default AnswerOption
