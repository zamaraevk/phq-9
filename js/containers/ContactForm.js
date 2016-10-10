import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Contact from './Contact'

import { setMessage, setTherapist, submitForm } from '../actions/index'

class ContactForm extends Component {

  render () {
    return (
      <div className="contact-box">
         {this.props.therapists.map((therapist, i) => {
           const isSelected = this.props.therapist == i
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

const { string, number, func, array } = React.PropTypes

ContactForm.propTypes = {
  setMessage: func.isRequired,
  setTherapist: func.isRequired,
  submitForm: func.isRequired,
  therapists: array.isRequired,
  therapist: number,
  message: string.isRequired
}

function mapStateToProps (state) {
  return {
    therapists: state.therapists,
    therapist: state.quiz.therapist,
    message: state.quiz.message
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setMessage: setMessage,
    setTherapist: setTherapist,
    submitForm: submitForm
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)

// const ContactForm = React.createClass({

//   // form Submit validation. To submit form user should pick one of the therapists + type message
//   checkFieldsBeforeSubmit: function () {
//     if (this.state.therapist && this.state.message) this.props.formSubmit()
//   },
//   // render all available therapists, textarea and submit button
//     // isSelected checking if therapist has been set in state --> update it css value for the background
//   render () {
//     return (
//       <div className="contact-box">
//         {data.therapists.map((therapist, i) => {
//           const isSelected = this.state.therapist == i
//           return <Contact therapist={therapist} isSelected={isSelected} therapistId={i} key={i} setTherapist={this.setTherapist} />
//         })}
//         <textarea
//           className="message-box"
//           name="description"
//           value={this.state.message}
//           onChange={this.handleChange}
//           placeholder="Please leave the message to a therapist" />
//         <button
//           className="btn"
//           onClick={this.checkFieldsBeforeSubmit}>Submit</button>
//       </div>
//       )
//   }
// })
