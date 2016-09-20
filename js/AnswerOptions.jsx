const React = require('react')

const AnswerOptions = (props) => (
  <div className="wrapper">
    <button
      className="btn"
      value={props.value}
      onClick={props.onAnswerSubmit}
    >{props.answer}</button>
  </div>
)

const { number, string, func } = React.PropTypes

AnswerOptions.propTypes = {
  onAnswerSubmit: func.isRequired,
  value: number.isRequired,
  answer: string.isRequired
}

module.exports = AnswerOptions
