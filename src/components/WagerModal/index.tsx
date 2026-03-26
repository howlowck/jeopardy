import React, { useMemo, useState } from 'react'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { ReduxState, Team } from '../../types'
import { close } from '../../redux/slices/dailyDoubleWager'
import { confirm } from '../../redux/slices/dailyDoubleWager'
import './styles.css'

type Props = {
  maxRoundWager: number
  teams: Team[]
}

const Component = ({ maxRoundWager, teams }: Props) => {
  const dispatch = useDispatch()
  const isOpen = useSelector((s: ReduxState) => s.dailyDoubleWager.isOpen)

  const [selectedTeam, setSelectedTeam] = useState<number>(0)
  const [wager, setWager] = useState<number>(maxRoundWager)

  const maxWager = useMemo(() => {
    const teamScore = teams[selectedTeam]?.score || 0
    return Math.max(maxRoundWager, teamScore)
  }, [maxRoundWager, selectedTeam])

  if (!isOpen) return null

  return (
    <ReactModal isOpen className="modal wager-modal" overlayClassName="overlay">
      <i className="material-icons close" onClick={() => dispatch(close())}>
        close
      </i>
      <h2>Daily Double - Place your wager</h2>
      <div className="wager-team-select">
        {teams.map((t: Team, i: number) => (
          <label key={i} className={i === selectedTeam ? 'selected' : ''}>
            <input
              type="radio"
              name="dd-team"
              checked={i === selectedTeam}
              onChange={() => setSelectedTeam(i)}
            />
            {t.name} (Current: {t.score})
          </label>
        ))}
      </div>
      <div className="wager-input">
        <label>Wager (max {maxWager}):</label>
        <input
          type="number"
          value={wager}
          min={0}
          max={maxWager}
          onChange={(e) => {
            let v = parseInt(e.target.value)
            if (isNaN(v)) v = 0
            if (v > maxWager) v = maxWager
            setWager(v)
          }}
        />
      </div>
      <div className="wager-actions">
        <button
          onClick={() => {
            dispatch(confirm({ teamIndex: selectedTeam, wager }))
          }}
        >
          Confirm Wager
        </button>
      </div>
    </ReactModal>
  )
}

export default Component
