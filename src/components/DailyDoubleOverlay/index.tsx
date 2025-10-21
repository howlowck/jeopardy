import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReduxState } from '../../types'
import { close as closeOverlay } from '../../redux/slices/dailyDouble'
import './styles.css'

const Component: React.FC = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((s: ReduxState) => s.dailyDouble.isOpen)

  // allow Esc to skip
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch(closeOverlay())
    }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, dispatch])

  if (!isOpen) return null

  return (
    <div className="daily-double-overlay">
      <div className="dd-stars" aria-hidden />
      <div className="dd-background" aria-hidden />
      <div className="dd-grid" aria-hidden />
      <div className="dd-content">
        <div className="dd-title-wrap">
          <h1 className="dd-title">
            DAILY
            <br />
            DOUBLE
          </h1>
          <div className="dd-reflection" aria-hidden>
            <h1 className="dd-title reflection">
              DAILY
              <br />
              DOUBLE
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component
