const React = require('react')
const { string, func, number, bool } = React.PropTypes

const Contact = React.createClass({

  propTypes: {
    isSelected: bool.isRequired,
    therapistId: number.isRequired,
    therapist: string.isRequired,
    setTherapist: func.isRequired
  },
  render () {
    const liStyle = {
      background: '#eee'
    }
    if (this.props.isSelected) {
      liStyle['background'] = '#ff7f7f'
    }
    return (
      <div className="contact-box">
        <p id={this.props.therapistId} className="contact" style={liStyle} onClick={this.props.setTherapist}>{this.props.therapist}</p>
      </div>
      )
  }
})

module.exports = Contact
