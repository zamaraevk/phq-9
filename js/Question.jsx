const React = require('react')
const { string } = React.PropTypes

const Question = React.createClass({

  propTypes: {
    question: string.isRequired
  },
  render () {
    return (
      <div className="question-box">
        <p className="question">{this.props.question}</p>
      </div>
      )
  }
})

module.exports = Question
