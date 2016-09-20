const React = require('react')
const Contact = require('./Contact')
const { number } = React.PropTypes

const Result = React.createClass({

  propTypes: {
    quizResult: number.isRequired
  },
  renderContact () {
    return (
      <Contact />
   )
  },
  render () {
    return (
      <div className="question-box">
        <p className="question">{this.props.quizResult}</p>
        {this.props.quizResult >= 10 ? this.renderContact() : null}
      </div>
      )
  }
})

module.exports = Result
