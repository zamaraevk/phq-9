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
      <div className="question-box">
        <h1>{this.state.therapist}</h1>
        <p className="question">Please contact therapists for help</p>
        {data.therapists.map((therapist, i) => {
          const isSelected = this.state.therapist == i
          return <Contact therapist={therapist} isSelected={isSelected} therapistId={i} key={i} setTherapist={this.setTherapist} />
        })}
        <textarea name="description" placeholder="Please leave the message to a therapist" />
      </div>
      )
  }
})

module.exports = ContactForm
