import React from 'react'
// Stateless component. Render current question
const Question = (props) => (
  <div className="question-box">
    <p className="question">{props.question}</p>
  </div>
)

const { string } = React.PropTypes
// Prop validation
Question.propTypes = {
  question: string.isRequired
}

export default Question
