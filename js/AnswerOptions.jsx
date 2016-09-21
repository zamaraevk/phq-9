const React = require('react')

const AnswerOptions = (props) => (
  <li
    className="btn"
    value={props.value}
    onClick={props.onAnswerSubmit}
    >{props.answer}</li>
)

const { number, string, func } = React.PropTypes

AnswerOptions.propTypes = {
  onAnswerSubmit: func.isRequired,
  value: number.isRequired,
  answer: string.isRequired
}

module.exports = AnswerOptions
