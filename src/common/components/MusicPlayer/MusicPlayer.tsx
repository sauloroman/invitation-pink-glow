import React from 'react'
import { motion } from 'framer-motion'
import { useMusicPlay } from '@/common/hooks/useMusicPlay'
import { PauseCircleIcon, PlayCircleIcon } from '@phosphor-icons/react'

import './_music-player.scss'

export const MusicPlayer: React.FC = () => {
    const { isPlaying, setIsPlaying, currentTime, duration, seek } = useMusicPlay()

    const formatTime = (seconds: number) => {
        if (isNaN(seconds) || seconds === Infinity) return '00:00'
        const mins = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        seek(parseFloat(e.target.value))
    }

    const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

    return (
        <div className="music-player-minimal">
            <button
                className={`music-player-minimal__play-btn ${isPlaying ? 'music-player-minimal__play-btn--playing' : ''}`}
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
            >
                {isPlaying ? (
                    <PauseCircleIcon size={25} weight="fill" />
                ) : (
                    <PlayCircleIcon size={25} weight="fill" />
                )}
            </button>

            <div className="music-player-minimal__body">
                <div className="music-player-minimal__info">
                    <span className="music-player-minimal__label">Música</span>
                    <span className="music-player-minimal__time">{formatTime(currentTime)} / {formatTime(duration)}</span>
                </div>
                <div className="music-player-minimal__progress-container">
                    <input
                        type="range"
                        min={0}
                        max={duration || 100}
                        value={currentTime}
                        onChange={handleProgressChange}
                        className="music-player-minimal__slider"
                        style={{
                            background: `linear-gradient(to right, #a46f89 0%, #a46f89 ${progressPercent}%, #e4d4dc ${progressPercent}%, #e4d4dc 100%)`
                        }}
                    />
                </div>
            </div>

            <div className="music-player-minimal__visualizer">
                {[1, 2, 3, 4].map((bar) => (
                    <motion.div
                        key={bar}
                        className="music-player-minimal__visualizer-bar"
                        animate={isPlaying ? {
                            scaleY: [0.3, 1.2, 0.4, 1.0, 0.3],
                            transition: {
                                duration: 1.0,
                                repeat: Infinity,
                                delay: bar * 0.15,
                                ease: "easeInOut"
                            }
                        } : { scaleY: 0.3 }}
                    />
                ))}
            </div>
        </div>
    )
}
