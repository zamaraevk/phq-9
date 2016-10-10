import React from 'react'

const Contact = (props) => {
  // if therapist has been set in global state --> update its css value
  const liStyle = {
    background: '#fff'
  }
  if (props.isSelected) {
    liStyle['background'] = '#2696b6'
    liStyle['color'] = '#fff'
  }
  return (
    <div className="contact-box">
      <p
        id={props.therapistId}
        className="contact"
        style={liStyle}
        onClick={props.setTherapist}>{props.therapist}</p>
    </div>
    )
}
// Prop validation
const { string, func, number, bool } = React.PropTypes

Contact.propTypes = {
  isSelected: bool.isRequired,
  therapistId: number.isRequired,
  therapist: string.isRequired,
  setTherapist: func.isRequired
}

export default Contact
