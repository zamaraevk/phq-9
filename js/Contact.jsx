const React = require('react')
const { string, func, number, bool } = React.PropTypes

const Contact = React.createClass({

  propTypes: {
    isSelected: bool.isRequired,
    therapistId: number.isRequired,
    therapist: string.isRequired,
    setTherapist: func.isRequired
  },
  getInitialState: function () {
    return {
      active: false
    }
  },
  click () {
    this.setState({
      active: true
    })
  },
  render () {
    const liStyle = {
      background: '#eee'
    }
    console.log(this.props.isSelected)
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
