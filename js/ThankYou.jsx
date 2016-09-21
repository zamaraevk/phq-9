const React = require('react')
// Stateless component. Render Thank You message
const ThankYou = (props) => (
  <div className="question-box">
    <p className="question">Thank You!</p>
    <img className="happy" src="public/thankyou.jpg" />
  </div>
)

module.exports = ThankYou
