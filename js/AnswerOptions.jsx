const React = require('react')
// Stateless component. Render list of answers
const AnswerOptions = (props) => (
  <li
    className="btn"
    value={props.value}
    onClick={props.onAnswerSubmit}
    >{props.answer}</li>
)

const { number, string, func } = React.PropTypes
// Prop validation
AnswerOptions.propTypes = {
  onAnswerSubmit: func.isRequired,
  value: number.isRequired,
  answer: string.isRequired
}

module.exports = AnswerOptions
