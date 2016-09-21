const React = require('react')

const ThankYou = (props) => (
  <div className="question-box">
    <p className="question">Thank You!</p>
  </div>
)

const { func } = React.PropTypes

ThankYou.propTypes = {
  question: func.isRequired
}

module.exports = ThankYou
