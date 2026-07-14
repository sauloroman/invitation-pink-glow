import React from 'react'
import { useCountdown } from '../../hooks/useCountdown';
import './_timer.scss'

export const TimerBox: React.FC<{ number: string; concept: string }> = ({ number, concept }) => {
    return (
        <div className="timer__box">
            <div className="timer__number">{number}</div>
            <div className="timer__concept">{concept}</div>
        </div>
    )
}

interface TimerProps {
    targetDate: string
    title?: string
}

export const Timer: React.FC<TimerProps> = ({ targetDate, title }) => {
    const { days, hours, minutes, seconds } = useCountdown(targetDate)

    const concepts = [
        { number: days, concept: 'DÍAS' },
        { number: hours, concept: 'HRS' },
        { number: minutes, concept: 'MIN' },
        { number: seconds, concept: 'SEC' }
    ]

    return (
        <div className='timer relative-z-2'>
            <span className='timer__title'>{title ?? ''}</span>
            <div className='timer__items'>
                {
                    concepts.map(({ number, concept }) => (
                        <TimerBox key={concept} number={String(number).padStart(2, '0')} concept={concept} />
                    ))
                }
            </div>
        </div>
    )
}

