const React = require('react')
const ContactForm = require('./ContactForm')
const ThankYou = require('./ThankYou')
const { number } = React.PropTypes

const Result = React.createClass({

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
  formSubmit () {
    this.setState({
      condition: '',
      submit: true
    })
  },
  resultLogic (result) {
    var condition = ''
    // Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.
    if (result <= 4) condition = 'Congratulations you are not stressed at all!'
    else if (result <= 9) condition = 'Hey, you have slight stress condition, try some chocolate'
    else condition = 'We suggest you to contact with our best specialists!'
    this.setState({condition: condition})
  },
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
  renderThankYou () {
    return (
      <ThankYou />
   )
  },
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
