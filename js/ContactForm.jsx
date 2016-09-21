const React = require('react')
const data = require('../public/data')
const Contact = require('./Contact')

const ContactForm = React.createClass({
  getInitialState: function () {
    return {
      therapist: null
    }
  },
  setTherapist (e) {
    this.setState({
      therapist: e.currentTarget.id
    })
  },
  render () {
    return (
      <div className="contact-box">
        {data.therapists.map((therapist, i) => {
          const isSelected = this.state.therapist == i
          return <Contact therapist={therapist} isSelected={isSelected} therapistId={i} key={i} setTherapist={this.setTherapist} />
        })}
        <textarea className="message-box" name="description" placeholder="Please leave the message to a therapist" />
      </div>
      )
  }
})

module.exports = ContactForm