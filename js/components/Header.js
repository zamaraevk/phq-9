import React from 'react'
// Stateless component. Render current question
const Header = (props) => (
  <div className="app-header">
    <h2>PHQ-9 Total: {props.answersCount}/27</h2>
    <p className="subtitle">Over the last two weeks, how often have you been bothered by any of the following problems?</p>
  </div>
)

const { number } = React.PropTypes
// Prop validation
Header.propTypes = {
  answersCount: number.isRequired
}

export default Header
