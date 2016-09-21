const React = require('react')
const { string, func, number, bool } = React.PropTypes

const Contact = React.createClass({
  // Prop validation
  propTypes: {
    isSelected: bool.isRequired,
    therapistId: number.isRequired,
    therapist: string.isRequired,
    setTherapist: func.isRequired
  },
  // if therapist has been set in state of ContactForm --> update its css value
  render () {
    const liStyle = {
      background: '#fff'
    }
    if (this.props.isSelected) {
      liStyle['background'] = '#2696b6'
      liStyle['color'] = '#fff'
    }
    return (
      <div className="contact-box">
        <p
          id={this.props.therapistId}
          className="contact"
          style={liStyle}
          onClick={this.props.setTherapist}>{this.props.therapist}</p>
      </div>
      )
  }
})

module.exports = Contact
