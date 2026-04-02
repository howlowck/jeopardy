import React, { useEffect } from 'react'
import './styles.css'
import Board from '../Board'
import { QuestionId, ReduxState, Round, Team } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import QuestionView from '../QuestionView'
import RoundSelectionView from '../RoundSelection'
import DailyDoubleOverlay from '../DailyDoubleOverlay'
import WagerModal from '../WagerModal'
import { completeRound } from '../../redux/epics/completeRoundEpic'
import { open as openQuestion } from '../../redux/slices/questionModal'
import { Redirect, Route, Switch } from 'wouter'

function App() {
  const isOpen = useSelector<ReduxState, boolean>((_) => _.questionModal.isOpen)
  const activeQuestion = useSelector<ReduxState, QuestionId | null>(
    (_) => _.activeQuestion
  )
  const teams = useSelector<ReduxState, Team[]>((_) => _.teams)
  const viewedTiles = useSelector<ReduxState, QuestionId[]>(
    (_) => _.viewedQuestions
  )
  const rounds = useSelector<ReduxState, Round[]>((_) => _.rounds)
  const currentRoundIndex = useSelector<ReduxState, number>(
    (_) => _.currentRound
  )

  const completedRounds = useSelector<ReduxState, number[]>(
    (_) => _.completedRounds
  )

  const isRoundSelectionOpen = useSelector<ReduxState, boolean>(
    (_) => _.roundSelectionModal.isOpen
  )

  const pointsList = rounds[currentRoundIndex]?.pointsList
  const categories = rounds[currentRoundIndex]?.categories

  const maxRoundWager = pointsList?.[4] ?? 0

  const dispatch = useDispatch()
  const ddConfirmedTeam = useSelector<ReduxState, number | null>(
    (_) => _.dailyDoubleWager.confirmedTeamIndex
  )

  // when a wager is confirmed, open the question modal
  useEffect(() => {
    if (ddConfirmedTeam !== null) {
      dispatch(openQuestion())
    }
  }, [ddConfirmedTeam, dispatch])

  return (
    <div className="App">
      <Switch>
        <Route path="/setup">
          <h1>Game Setup</h1>
        </Route>
        <Route path="/">
          <Board
            pointsList={pointsList}
            categories={categories}
            viewedTiles={viewedTiles}
          />
          <QuestionView
            isOpen={isOpen}
            teams={teams}
            dailyDouble={
              activeQuestion
                ? categories[activeQuestion.categoryIndex]?.questions[
                    activeQuestion.questionIndex
                  ]?.dailyDouble === true
                : false
            }
            points={
              activeQuestion ? pointsList?.[activeQuestion.questionIndex] ?? 0 : 0
            }
            question={
              activeQuestion
                ? categories[activeQuestion.categoryIndex]?.questions[
                    activeQuestion.questionIndex
                  ]?.prompt ?? ''
                : ''
            }
            answer={
              activeQuestion
                ? categories[activeQuestion.categoryIndex]?.questions[
                    activeQuestion.questionIndex
                  ]?.answer ?? ''
                : ''
            }
          />
          <DailyDoubleOverlay />
          <WagerModal teams={teams} maxRoundWager={maxRoundWager} />
          <RoundSelectionView
            rounds={rounds}
            completedRounds={completedRounds}
            isOpen={isRoundSelectionOpen}
            teams={teams}
          />
          <div className="sidebar">
            <div className="teams">
              <h1>Teams</h1>
              {teams.map((_, i) => {
                return (
                  <div className="team" key={i}>
                    {_.name} <br />
                    <span style={_.score < 0 ? { color: 'red' } : {}}>
                      {_.score}
                    </span>
                  </div>
                )
              })}
            </div>
            <button
              onClick={() =>
                dispatch(
                  completeRound({ completedRoundIndex: currentRoundIndex })
                )
              }
              className="complete-round"
            >
              Complete Round
            </button>
          </div>

          <button
            className="reset"
            onClick={() => localStorage.setItem('jeopardyState', '')}
          >
            Reset
          </button>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  )
}

export default App
