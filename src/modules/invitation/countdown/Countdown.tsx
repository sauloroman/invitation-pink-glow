import React from 'react'
import { Timer } from '@/common/components/Timer/Timer'
import { getEnvVariables } from '@/common/helpers/get-env-variables'
import { MusicPlayer } from '@/common'

const { VITE_INVITATION_DATE } = getEnvVariables()

export const Countdown: React.FC = () => {
    return (
        <>
            <section className='countdown'>
                <div className="countdown__container">
                    <Timer title='&mdash; Diciembre 10, 2026 &mdash;' targetDate={VITE_INVITATION_DATE} />
                </div>
                <p className='countdown__text'>Un momento como este solo sucede una vez en la vida y quiero compartirlo contigo. <span>Te espero para celebrar.</span></p>
                <MusicPlayer />
            </section>
        </>
    )
}
