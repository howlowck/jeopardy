import React from 'react'
import ReactModal from 'react-modal'
import { useDispatch } from 'react-redux'
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
}

const Component: React.FC<Prop> = ({ question, isOpen, teams, points }) => {
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
        {teams.map((_, i) => {
          return <TeamView points={points} team={_} teamIndex={i} key={i} />
        })}
      </div>
    </ReactModal>
  )
}

export default Component
