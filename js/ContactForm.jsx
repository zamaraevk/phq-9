const React = require('react')
const data = require('../public/data')
const Contact = require('./Contact')
const { func } = React.PropTypes

const ContactForm = React.createClass({
  propTypes: {
    formSubmit: func.isRequired
  },
  getInitialState: function () {
    return {
      therapist: null,
      message: ''
    }
  },
  handleChange: function (e) {
    this.setState({message: e.target.value})
  },
  setTherapist (e) {
    this.setState({
      therapist: e.currentTarget.id
    })
  },
  checkFieldsBeforeSubmit: function () {
    if (this.state.therapist && this.state.message) this.props.formSubmit()
  },
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
