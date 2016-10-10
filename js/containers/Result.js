import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContactForm from './ContactForm'
import ThankYou from '../components/ThankYou'

class Result extends Component {

  // based on result - check Depression Severity and return string - condition message
  resultCondition (result) {
    var condition = ''
    // Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.
    if (result <= 4) condition = 'Congratulations you are not stressed at all!'
    else if (result <= 9) condition = 'Hey, you have a mild depression, try some chocolate?'
    else if (result <= 14) condition = 'Hm, looks like you have moderate depression. We suggest you to contact our best specialists!'
    else if (result <= 19) condition = 'Hm, looks like you have moderately severe depression. We suggest you to contact our best specialists!'
    else condition = 'Hm, looks like you have severe depression. We suggest you to contact our best specialists!'
    return condition
  }
  // render Contact component
  renderContact () {
    return (
      <ContactForm />
   )
  }
  renderImage () {
    return (
      <img className="happy" src="public/cat.png" />
   )
  }
  // render ThankYou component
  renderThankYou () {
    return (
      <ThankYou />
   )
  }
  // logic based on result number and submit(boolean)
  render () {
    var show
    var condition = this.resultCondition(this.props.quizResult)
    // if therapist and message has been submit --> resent condition message, render ThankYou component
    if (this.props.submit) {
      condition = ''
      show = this.renderThankYou()
    // if total quiz result >= 10 --> render Contact Form
    } else if (this.props.quizResult >= 10) {
      show = this.renderContact()
    } else {
      show = this.renderImage()
    }
    return (
      <div className="question-box">
        <p className="result">{condition}</p>
        {show}
      </div>
        )
  }
}
// Prop validation
const { number, bool } = React.PropTypes

Result.propTypes = {
  quizResult: number.isRequired,
  submit: bool.isRequired
}
// Access to global state properties. Use as a props.
function mapStateToProps (state) {
  return {
    submit: state.quiz.submit
  }
}
// Connect your componet to global state object
export default connect(mapStateToProps)(Result)
