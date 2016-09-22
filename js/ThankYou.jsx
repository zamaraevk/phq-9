const React = require('react')
// Stateless component. Render Thank You message
const ThankYou = (props) => (
  <div className="question-box">
    <p className="question">Thank You! No stress! We will contact you shortly!</p>
    <img className="calm" src="public/thankyou.png" />
  </div>
)

module.exports = ThankYou
