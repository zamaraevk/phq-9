const initialState = {
  submit: false,
  therapist: null,
  message: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
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
