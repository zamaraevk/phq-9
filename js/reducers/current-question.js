const initialState = {
  questionId: 0,
  answersCount: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ON_ANSWER_SUBMIT' :
      return Object.assign({}, state, {
        questionId: state.questionId + 1,
        answersCount: state.answersCount + action.payload
      })
  }
  return state
}
