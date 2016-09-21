const React = require('react')
const data = require('../public/data')
const Contact = require('./Contact')
const { func } = React.PropTypes

const ContactForm = React.createClass({
  // Prop validation
  propTypes: {
    formSubmit: func.isRequired
  },
  getInitialState: function () {
    return {
      therapist: null,
      message: ''
    }
  },
  // update textarea message in state
  handleChange: function (e) {
    this.setState({message: e.target.value})
  },
  // update current therapist id in state
  setTherapist (e) {
    this.setState({
      therapist: e.currentTarget.id
    })
  },
  // form Submit validation. To submit form user should pick one of the therapists + type message
  checkFieldsBeforeSubmit: function () {
    if (this.state.therapist && this.state.message) this.props.formSubmit()
  },
  // render all available therapists, textarea and submit button
    // isSelected checking if therapist has been set in state --> update it css value for the background
  render () {
    return (
      <div className="contact-box">
        {data.therapists.map((therapist, i) => {
          const isSelected = this.state.therapist == i
          return <Contact therapist={therapist} isSelected={isSelected} therapistId={i} key={i} setTherapist={this.setTherapist} />
        })}
        <textarea
          className="message-box"
          name="description"
          value={this.state.message}
          onChange={this.handleChange}
          placeholder="Please leave the message to a therapist" />
        <button
          className="btn"
          onClick={this.checkFieldsBeforeSubmit}>Submit</button>
      </div>
      )
  }
})

module.exports = ContactForm
