const React = require('react')
// Stateless component. Render Thank You message
const ThankYou = (props) => (
  <div className="question-box">
    <p className="question">Thank You!</p>
    <img className="happy" src="public/thankyou.png" />
  </div>
)

module.exports = ThankYou
