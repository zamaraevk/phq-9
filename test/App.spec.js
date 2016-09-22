/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Quiz = require('../js/Quiz')
const Question = require('../js/Question')
const Contact = require('../js/Contact')
const ContactForm = require('../js/ContactForm')
const Result = require('../js/Result')
const ThankYou = require('../js/ThankYou')
const AnswerOptions = require('../js/AnswerOptions')
const { shallow } = require('enzyme')
const { answers, therapists } = require('../public/data')

describe('<Quiz />', () => {
  // prop validation for Quiz component on server side
  const props = {
    onAnswerSubmit: function () {},
    question: 'string'
  }
  it('it should contain Question component', () => {
    const wrapper = shallow(<Quiz {...props} />)
    expect(wrapper.find(Question)).to.have.length(1)
  })
  it('should have props for onAnswerSubmit and question', function () {
    const wrapper = shallow(<Quiz {...props} />)
    expect(wrapper.props().onAnswerSubmit).to.be.defined
    expect(wrapper.props().question).to.be.defined
  })
  it('it should render as many answers as there are data for', () => {
    const wrapper = shallow(<Quiz {...props} />)
    expect(wrapper.find(AnswerOptions).length).to.equal(answers.length)
  })
})

describe('<Contact />', () => {
  // prop validation for ContactForm component on server side
  const props = {
    isSelected: true,
    therapistId: 1,
    therapist: 'string',
    setTherapist: function () {}
  }
  it('Contact component should exist', () => {
    const wrapper = shallow(<Contact {...props} />)
    expect(!!wrapper).to.be.true
  })
})

describe('<ContactForm />', () => {
  // prop validation for ContactForm component on server side
  const props = {
    formSubmit: function () {}
  }
  it('it should have a textarea', () => {
    const wrapper = shallow(<ContactForm {...props} />)
    expect(wrapper.find('textarea')).to.have.length(1)
  })
  it('it should have a button', function () {
    const wrapper = shallow(<ContactForm {...props} />)
    expect(wrapper.find('button')).to.have.length(1)
  })
  it('it should render as many therapists as there are data for', () => {
    const wrapper = shallow(<ContactForm {...props} />)
    expect(wrapper.find(Contact).length).to.equal(therapists.length)
  })
  it('it should update state.message on type in textarea', () => {
    const wrapper = shallow(<ContactForm {...props} />)
    wrapper.find('textarea').simulate('change', {target: {value: 'test'}})
    expect(wrapper.state('message')).to.equal('test')
  })
})

describe('<Result />', () => {
  // prop validation for ContactForm component on server side
  const props = {
    quizResult: 1
  }
  it('it should render Thank You component <ThankYou /> on form submit', () => {
    const wrapper = shallow(<Result {...props} />)
    wrapper.setState({ submit: true })
    expect(wrapper.find(ThankYou)).to.have.length(1)
  })
})

describe('<Question />', () => {
  // prop validation for ContactForm component on server side
  const props = {
    question: 'Little interest or pleasure in doing things?'
  }
  it('it should render correct question', () => {
    const wrapper = shallow(<Question {...props} />)
    expect(wrapper.text()).to.equal(props.question)
  })
  it('it should have correct html', () => {
    const wrapper = shallow(<Question {...props} />)
    expect(wrapper.html()).to.equal(
      '<div class="question-box"><p class="question">Little interest or pleasure in doing things?</p></div>')
  })
})
