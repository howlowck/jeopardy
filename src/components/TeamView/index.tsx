import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { close } from '../../redux/slices/questionModal'
import { addScore, removeScore } from '../../redux/slices/teams'
import { Team } from '../../types'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

type Prop = {
  points: number
  team: Team
  teamIndex: number
}

const Component: React.FC<Prop> = ({ team, points, teamIndex }) => {
  const dispatch = useDispatch()
  const [isPlaying, setPlaying] = useState(false)

  return (
    <div className="team">
      <div
        className="timer team-timer"
        onClick={() => {
          console.log('clicked!')
          setPlaying(!isPlaying)
        }}
      >
        <CountdownCircleTimer
          duration={10}
          isLinearGradient={false}
          strokeWidth={5}
          colors={[
            ['#000', 0.75],
            ['#f00', 0.25],
          ]}
          isPlaying={isPlaying}
          size={60}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
      <i
        className="correct material-icons"
        onClick={() => {
          dispatch(addScore({ teamIndex: teamIndex, points }))
          dispatch(close())
        }}
      >
        check
      </i>
      <div>
        {team.name} <br />{' '}
        <span style={team.score < 0 ? { color: 'red' } : {}}>{team.score}</span>
      </div>
      <i
        className="incorrect material-icons"
        onClick={() => dispatch(removeScore({ teamIndex: teamIndex, points }))}
      >
        close
      </i>
    </div>
  )
}

export default Component
