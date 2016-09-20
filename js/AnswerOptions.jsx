const React = require('react')

const AnswerOptions = (props) => (
  <div className="wrapper">
    <button
      className="btn"
      value={props.value}
      onClick={props.nextStep.bind(null, props.value)}
    >{props.answer}</button>
  </div>
)

const { number, string, func } = React.PropTypes

AnswerOptions.propTypes = {
  value: number.isRequired,
  answer: string.isRequired,
  nextStep: func.isRequired
}

module.exports = AnswerOptions
