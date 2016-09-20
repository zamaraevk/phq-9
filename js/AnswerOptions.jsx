const React = require('react')

const AnswerOptions = (props) => (
  <div
    className="wrapper"
    key={props.key}
   >
    <button
      className="btn"
      onClick={props.nextStep}
    >{props.answer}</button>
  </div>
)

const { number, string, func } = React.PropTypes

AnswerOptions.propTypes = {
  key: number.isRequired,
  answer: string.isRequired,
  nextStep: func.isRequired
}

module.exports = AnswerOptions
