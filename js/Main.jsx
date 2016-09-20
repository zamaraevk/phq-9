const React = require('react')
const data = require('../public/data')
const Question = require('./Question')
const AnswerOptions = require('./AnswerOptions')

const Main = React.createClass({
  getInitialState: function () {
    return {
      step: 0,
      count: 0
    }
  },
  nextStep: function (num) {
    if (this.state.step === data.questions.length - 1) {
      return
    } else {
      this.setState({
        step: this.state.step + 1,
        count: this.state.count + num
      })
    }
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>PHQ-9 Count: {this.state.count}</h1>
        </header>
        <div className='questions'>
          <Question question={data.questions[this.state.step]} />
          {data.answers.map((object) => {
            return <AnswerOptions answer={object.answer} key={object.id} value={object.id} nextStep={this.nextStep} />
          })
          }
        </div>
      </div>
    )
  }
})

module.exports = Main
