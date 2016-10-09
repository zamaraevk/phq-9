export const onAnswerSubmit = (e) => {
  const target = Number(e.currentTarget.value)
  console.log('clicked', target)
  return {
    type: 'ON_ANSWER_SUBMIT',
    payload: target
  }
}

export const setTherapist = (e) => {
  const target = e.currentTarget.id
  return {
    type: 'SET_THERAPIST',
    payload: target
  }
}

export const setMessage = (e) => {
  const text = e.target.value
  console.log(text)
  return {
    type: 'SET_MESSAGE',
    text: text
  }
}

export const submitForm = () => {
  return {
    type: 'SUBMIT_FORM'
  }
}
