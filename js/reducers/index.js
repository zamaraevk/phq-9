import { combineReducers } from 'redux'
import QuestionsReducer from './questions'
import AnswersReducer from './answers'
import TherapistsReducer from './therapists'
import CurrentQuestion from './current-question'
import Results from './results'

const allReducers = combineReducers({
  questions: QuestionsReducer,
  answers: AnswersReducer,
  therapists: TherapistsReducer,
  currentQuestion: CurrentQuestion,
  results: Results
})

export default allReducers
