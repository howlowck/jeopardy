import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReduxState } from '../../types'
import { close as closeOverlay } from '../../redux/slices/dailyDouble'
import './styles.css'

const Component: React.FC = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((s: ReduxState) => s.dailyDouble.isOpen)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
  const gainRef = useRef<GainNode | null>(null)

  // allow Esc to skip
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch(closeOverlay())
    }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, dispatch])

  // play daily double sound with fade in/out when overlay opens/closes
  useEffect(() => {
    const FADE_TIME = 0.3 // seconds
    const MAX_VOLUME = 0.2 // cap peak volume

    // helper to ensure AudioContext exists and is resumed
    const ensureAudioSetup = async () => {
      if (!audioRef.current) audioRef.current = new Audio('/daily-double.wav')

      if (!audioCtxRef.current) {
        // create a new AudioContext
        try {
          audioCtxRef.current = new (window.AudioContext ||
            (window as any).webkitAudioContext)()
        } catch (e) {
          audioCtxRef.current = null
        }
      }

      const ctx = audioCtxRef.current
      if (!ctx) return null

      // create source and gain if not yet created
      if (!sourceRef.current) {
        try {
          sourceRef.current = ctx.createMediaElementSource(
            audioRef.current as HTMLAudioElement
          )
        } catch (e) {
          sourceRef.current = null
        }
      }

      if (!gainRef.current) {
        gainRef.current = ctx.createGain()
        gainRef.current.gain.value = 0
      }

      if (sourceRef.current && gainRef.current) {
        try {
          sourceRef.current.connect(gainRef.current)
          gainRef.current.connect(ctx.destination)
        } catch (e) {
          // ignore connect errors
        }
      }

      // resume context if suspended (browsers require user interaction)
      if (ctx.state === 'suspended') {
        try {
          await ctx.resume()
        } catch (e) {
          // ignore resume errors
        }
      }

      return ctx
    }

    let fadeOutTimeout: number | undefined

    const playWithFadeIn = async () => {
      const ctx = await ensureAudioSetup()
      const a = audioRef.current!
      const gain = gainRef.current
      if (!a) return

      // Reset audio playback
      try {
        a.pause()
        a.currentTime = 0
      } catch (e) {
        // noop
      }

      // try to play (may be blocked); even if play is blocked, we'll schedule gain ramps
      void a.play().catch(() => {})

      if (ctx && gain) {
        const now = ctx.currentTime
        try {
          gain.gain.cancelScheduledValues(now)
          gain.gain.setValueAtTime(0, now)
          gain.gain.linearRampToValueAtTime(MAX_VOLUME, now + FADE_TIME)
        } catch (e) {
          // ignore scheduling errors
        }
      } else if (gain) {
        // fallback: set to max volume
        try {
          gain.gain.value = MAX_VOLUME
        } catch (e) {
          // noop
        }
      }
    }

    const fadeOutAndPause = () => {
      const ctx = audioCtxRef.current
      const gain = gainRef.current
      const a = audioRef.current
      if (ctx && gain) {
        const now = ctx.currentTime
        try {
          const currentVal =
            typeof gain.gain.value === 'number' ? gain.gain.value : MAX_VOLUME
          gain.gain.cancelScheduledValues(now)
          gain.gain.setValueAtTime(currentVal, now)
          gain.gain.linearRampToValueAtTime(0, now + FADE_TIME)
        } catch (e) {
          // ignore
        }
        // pause after fade completes
        fadeOutTimeout = window.setTimeout(() => {
          try {
            a && a.pause()
            if (a) a.currentTime = 0
          } catch (e) {
            // noop
          }
        }, Math.ceil(FADE_TIME * 1000) + 50)
      } else if (a) {
        // fallback: immediate pause
        try {
          a.pause()
          a.currentTime = 0
        } catch (e) {
          // noop
        }
      }
    }

    if (isOpen) {
      void playWithFadeIn()
    } else {
      fadeOutAndPause()
    }

    return () => {
      if (fadeOutTimeout) {
        clearTimeout(fadeOutTimeout)
      }
      // don't fully tear down AudioContext here to allow quick re-open; only pause and reset
      if (!isOpen) {
        try {
          if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
          }
        } catch (e) {
          // noop
        }
      }
    }
  }, [isOpen])

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
