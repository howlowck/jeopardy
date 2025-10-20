import './styles.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { close } from '../../redux/slices/questionModal'
import { addScore, removeScore } from '../../redux/slices/teams'
import { Team } from '../../types'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

type Prop = {
  points: number
  maxRoundWager: number
  team: Team
  teamIndex: number
  isWagerEditable?: boolean
}

const Component: React.FC<Prop> = ({
  team,
  points,
  teamIndex,
  maxRoundWager,
  isWagerEditable,
}) => {
  const dispatch = useDispatch()
  const [isPlaying, setPlaying] = useState(false)
  const [wager, setWager] = useState<number>(points)
  const maxWager = team.score < maxRoundWager ? maxRoundWager : team.score

  return (
    <div className="team">
      {isWagerEditable && (
        <div className="wager-form">
          <label>Wager:</label>
          <input
            type="number"
            value={wager}
            min={0}
            max={maxWager}
            disabled={!isWagerEditable}
            onChange={(e) => {
              let val = parseInt(e.target.value)
              if (isNaN(val)) val = 0
              if (val > maxWager) val = maxWager
              setWager(val)
            }}
          />
          <p>(Max {maxWager})</p>
        </div>
      )}

      <div className="result">
        <div
          className="timer team-timer"
          onClick={() => {
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
            dispatch(addScore({ teamIndex: teamIndex, points: wager }))
            dispatch(close())
          }}
        >
          check
        </i>
        <div>
          {team.name} <br />{' '}
          <span style={team.score < 0 ? { color: 'red' } : {}}>
            {team.score}
          </span>
        </div>
        <i
          className="incorrect material-icons"
          onClick={() =>
            dispatch(removeScore({ teamIndex: teamIndex, points: wager }))
          }
        >
          close
        </i>
      </div>
    </div>
  )
}

export default Component
