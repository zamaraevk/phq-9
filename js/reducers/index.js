import { combineReducers } from 'redux'
import QuestionsReducer from './questions'
import AnswersReducer from './answers'
import TherapistsReducer from './therapists'
import QuizReducer from './reducer-quiz'

const allReducers = combineReducers({
  questions: QuestionsReducer,
  answers: AnswersReducer,
  therapists: TherapistsReducer,
  quiz: QuizReducer
})

export default allReducers
