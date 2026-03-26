import React from 'react'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../redux/slices/questionModal'
import { Team } from '../../types'
import TeamView from '../TeamView'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './styles.css'

type Prop = {
  isOpen: boolean
  question: string
  points: number
  teams: Team[]
  dailyDouble: boolean
  confirmedTeamIndex?: number
}

const Component: React.FC<Prop> = ({
  isOpen,
  question,
  points,
  teams,
  dailyDouble,
  confirmedTeamIndex: confirmedTeam,
}) => {
  const dispatch = useDispatch()

  return (
    <ReactModal
      className="modal question-view"
      isOpen={isOpen}
      overlayClassName="overlay"
    >
      <i
        className="material-icons close"
        onClick={() => {
          dispatch(close())
        }}
      >
        close
      </i>
      <div className="timer question-timer">
        <CountdownCircleTimer
          duration={20}
          colors={[['#ffffff', 1]]}
          trailColor="#060CE9"
          isPlaying
          size={80}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>

      <div className="question">
        <span>{question}</span>
      </div>
      <div className="teams">
        {dailyDouble && typeof confirmedTeam === 'number'
          ? // only show the confirmed team for daily double
            teams
              .filter((_, i) => i === confirmedTeam)
              .map((t, i) => (
                <TeamView
                  points={points}
                  team={t}
                  teamIndex={confirmedTeam}
                  key={confirmedTeam}
                />
              ))
          : teams.map((_, i) => {
              return <TeamView points={points} team={_} teamIndex={i} key={i} />
            })}
      </div>
    </ReactModal>
  )
}

export default Component
