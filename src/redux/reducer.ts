import { combineReducers } from '@reduxjs/toolkit'
import activeQuestion from './slices/activeQuestion'
import questionModal from './slices/questionModal'
import teams from './slices/teams'
import viewedQuestions from './slices/viewedQuestions'
import rounds from './slices/rounds'
import currentRound from './slices/currentRound'
import roundSelectionModal from './slices/roundSelectionModal'
import completedRounds from './slices/completedRounds'
// Import Reducers Here (do not delete this line)

export default combineReducers({
  activeQuestion,
  viewedQuestions,
  questionModal,
  teams,
  rounds,
  currentRound,
  roundSelectionModal,
  completedRounds,
  // Add Reducers Here (do not delete this line)
})
