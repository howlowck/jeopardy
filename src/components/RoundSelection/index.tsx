import React from 'react'
import ReactModal from 'react-modal'
import { useDispatch } from 'react-redux'
import { newRound } from '../../redux/epics/newRoundEpic'
import { resetScores } from '../../redux/slices/teams'
import { Round, Team } from '../../types'
import './styles.css'

type Prop = {
  rounds: Round[]
  isOpen: boolean
  completedRounds: number[]
  teams: Team[]
}

const Component: React.FC<Prop> = ({
  rounds,
  isOpen,
  completedRounds,
  teams,
}) => {
  const dispatch = useDispatch()

  return (
    <ReactModal className="modal round-selection" isOpen={isOpen}>
      <div className="title">Jeopardy Game</div>
      <h2>Scores</h2>
      <div className="teams">
        {teams.map((_, i) => {
          return (
            <div className="team" key={`team-${i}`}>
              {_.name}:
              <span style={_.score < 0 ? { color: 'red' } : {}}>{_.score}</span>
            </div>
          )
        })}
        <button onClick={() => dispatch(resetScores())}>Reset Score</button>
      </div>
      <h2>Rounds</h2>
      <div className="selections">
        {rounds.map((_, i) => {
          const completed =
            completedRounds.find(
              (completedRoundIndex) => completedRoundIndex === i
            ) !== undefined
          return (
            <button
              className={completed ? 'round-select disabled' : 'round-select'}
              disabled={completed}
              onClick={() => dispatch(newRound({ newRoundIndex: i }))}
              key={`round-${i}`}
            >
              {_.name}
            </button>
          )
        })}
      </div>
    </ReactModal>
  )
}

export default Component
