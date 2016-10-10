import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Contact from '../components/Contact'

import { setMessage, setTherapist, submitForm } from '../actions/index'

class ContactForm extends Component {

  render () {
    return (
      <div className="contact-box">
         {this.props.therapists.map((therapist, i) => {
           const isSelected = this.props.therapist === i
           return <Contact therapist={therapist} isSelected={isSelected} therapistId={i} key={i} setTherapist={this.props.setTherapist} />
         })}
        <textarea
          className="message-box"
          name="description"
          value={this.props.message}
          onChange={this.props.setMessage}
          placeholder="Please leave the message to a therapist" />
        <button
          className="btn"
          onClick={this.props.submitForm}>Submit</button>
      </div>
     )
  }
}
// Prop validation
const { string, number, func, array } = React.PropTypes

ContactForm.propTypes = {
  setMessage: func.isRequired,
  setTherapist: func.isRequired,
  submitForm: func.isRequired,
  therapists: array.isRequired,
  therapist: number,
  message: string.isRequired
}
// Access to global state properties. Use as a props.
function mapStateToProps (state) {
  return {
    therapists: state.therapists,
    therapist: state.quiz.therapist,
    message: state.quiz.message
  }
}
// use Action Creators as props
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setMessage: setMessage,
    setTherapist: setTherapist,
    submitForm: submitForm
  }, dispatch)
}
// Connect your componet to global state object
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
