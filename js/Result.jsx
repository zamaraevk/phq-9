const React = require('react')
const { string } = React.PropTypes

const Result = React.createClass({

  propTypes: {
    quizResult: string.isRequired
  },
  render () {
    return (
      <div className="question-box">
        <p className="question">{this.props.quizResult}</p>
      </div>
      )
  }
})

module.exports = Result
