const React = require('react')

const ThankYou = (props) => (
  <div className="question-box">
    <p className="question">Thank You!</p>
    <img className="happy" src="public/thankyou.jpg" />
  </div>
)

const { func } = React.PropTypes

ThankYou.propTypes = {
  question: func.isRequired
}

module.exports = ThankYou
