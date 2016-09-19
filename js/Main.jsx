const React = require('react')
const data = require('../public/data')
const Question = require('./Question')

const Main = React.createClass({
  componentDidMount () {
    console.log(data)
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>PHQ-9</h1>
        </header>
        <div className='questions'>
          {data.questions
            .map((question) => (
              <Question {...question} key={question.id} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Main
