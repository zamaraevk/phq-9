const initialState = {
  questionId: 0,
  answersCount: 0,
  submit: false,
  therapist: null,
  message: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ON_ANSWER_SUBMIT' :
      return Object.assign({}, state, {
        questionId: state.questionId + 1,
        answersCount: state.answersCount + action.payload
      })
    case 'SET_THERAPIST' :
      return Object.assign({}, state, {
        therapist: Number(action.payload)
      })
    case 'SET_MESSAGE' :
      return Object.assign({}, state, {
        message: action.text
      })
    case 'SUBMIT_FORM' :
      return Object.assign({}, state, {
        submit: true
      })
    default:
      return state
  }
}
