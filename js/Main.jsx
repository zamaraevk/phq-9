const React = require('react')
const data = require('../public/data')
const Question = require('./Question')

const Main = React.createClass({
  getInitialState: function () {
    return {
      step: 7
    }
  },
  nextStep: function () {
    if (this.state.step === data.questions.length - 1) {
      return
    } else {
      this.setState({
        step: this.state.step + 1
      })
    }
  },
  previousStep: function () {
    if (this.state.step === 0) {
      return
    } else {
      this.setState({
        step: this.state.step - 1
      })
    }
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>PHQ-9</h1>
        </header>
        <div className='questions'>
          <Question question={data.questions[this.state.step]} />
        </div>
        <div className="nav">
          <button className="back" onClick={this.previousStep}>Back</button>
          <button className="next" onClick={this.nextStep}>Next</button>
        </div>
      </div>
    )
  }
})

module.exports = Main
