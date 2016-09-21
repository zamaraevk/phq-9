const React = require('react')

const Question = (props) => (
  <div className="question-box">
    <p className="question">{props.question}</p>
  </div>
)

const { string } = React.PropTypes

Question.propTypes = {
  question: string.isRequired
}

module.exports = Question
