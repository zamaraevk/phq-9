const React = require('react')
const ContactForm = require('./ContactForm')
const ThankYou = require('./ThankYou')
const { number } = React.PropTypes

const Result = React.createClass({
  // Prop validation
  propTypes: {
    quizResult: number.isRequired
  },
  getInitialState: function () {
    return {
      condition: '',
      submit: false
    }
  },
  componentWillMount () {
    this.resultLogic(this.props.quizResult)
  },
  // on form Submit --> reset condition message and set submit: true to trigger renderThankYou function(to render ThankYou component)
  formSubmit () {
    this.setState({
      condition: '',
      submit: true
    })
  },
  // based on result - check Depression Severity and update condition message in state
  resultLogic (result) {
    var condition = ''
    // Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.
    if (result <= 4) condition = 'Congratulations you are not stressed at all!'
    else if (result <= 9) condition = 'Hey, you have a mild depression, try some chocolate?'
    else if (result <= 14) condition = 'Hm, looks like you have moderate depression. We suggest you to contact our best specialists!'
    else if (result <= 19) condition = 'Hm, looks like you have moderately severe depression. We suggest you to contact our best specialists!'
    else condition = 'Hm, looks like you have severe depression. We suggest you to contact our best specialists!'
    this.setState({condition: condition})
  },
  // render Contact component
  renderContact () {
    return (
      <ContactForm formSubmit={this.formSubmit} />
   )
  },
  renderImage () {
    return (
      <img className="happy" src="public/cat.png" />
   )
  },
  // render ThankYou component
  renderThankYou () {
    return (
      <ThankYou />
   )
  },
  // logic based on result number and this.state.submit
  render () {
    var show
    if (this.state.submit) {
      show = this.renderThankYou()
    } else if (this.props.quizResult >= 10) {
      show = this.renderContact()
    } else {
      show = this.renderImage()
    }
    return (
      <div className="question-box">
        <p className="result">{this.state.condition}</p>
        {show}
      </div>
      )
  }
})

module.exports = Result
