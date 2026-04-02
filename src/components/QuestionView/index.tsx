import React, { useState, useEffect } from 'react'
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
  answer: string
  points: number
  teams: Team[]
  dailyDouble: boolean
  confirmedTeamIndex?: number
}

const Component: React.FC<Prop> = ({
  isOpen,
  question,
  answer,
  points,
  teams,
  dailyDouble,
  confirmedTeamIndex: confirmedTeam,
}) => {
  const dispatch = useDispatch()
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    if (!isOpen) setShowAnswer(false)
  }, [isOpen])

  const questionFontSize =
    question.length > 200 ? '4vh' :
    question.length > 130 ? '6vh' :
    question.length > 70  ? '8vh' : '10vh'

  return (
		<ReactModal
			className="modal question-view"
			isOpen={isOpen}
			overlayClassName="overlay"
		>
			<i
				className="material-icons close"
				onClick={() => {
					dispatch(close());
				}}
			>
				close
			</i>
			<div className="timer question-timer">
				<CountdownCircleTimer
					duration={20}
					colors="#ffffff"
					trailColor="#060CE9"
					isPlaying
					size={80}
				>
					{({ remainingTime }) => remainingTime}
				</CountdownCircleTimer>
			</div>

			<div className="question" style={{ fontSize: questionFontSize }}>
				<span>{question}</span>
			</div>
			{showAnswer && (
				<div className="answer">
					<span>{answer}</span>
				</div>
			)}
			<div className="show-answer-row">
				<button className="show-answer-btn" onClick={() => setShowAnswer((v) => !v)}>
					{showAnswer ? 'Hide Answer' : 'Show Answer'}
				</button>
			</div>
			<div className="teams">
				{dailyDouble && typeof confirmedTeam === "number"
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
							return (
								<TeamView points={points} team={_} teamIndex={i} key={i} />
							);
						})}
			</div>
		</ReactModal>
	);
}

export default Component
