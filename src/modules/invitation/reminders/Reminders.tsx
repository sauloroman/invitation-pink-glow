import React from 'react'
import buttonflies from '@/assets/images/butterflies.png'
import maceta2 from '@/assets/images/maceta-2.png'
import { HashIcon, InfoIcon } from '@phosphor-icons/react'

export const Reminders: React.FC = () => {
    return (
        <section className='reminders'>
            <div className="reminders__container reminders__container--1">
                <InfoIcon className='locations__header-icon' size={48} weight='thin' />
                <h2 className="reminders__title">Sin Niños En Recepción</h2>
                <p className="reminders__subtitle">(Solo adultos y adolescentes)</p>
                <span className='reminders__text'>Evitemos confusiones y molestias, agradecemos su comprensión y evite traer niños.</span>
            </div>
            <div className="reminders__butterflies-box">
                <img className='reminders__butterflies' src={buttonflies} alt="" />
            </div>
            <div className="reminders__container reminders__container--2">
                <HashIcon className='locations__header-icon' size={48} weight='thin' />
                <h2 className="reminders__title">#XVSofiaGuerrero</h2>
                <p className="reminders__subtitle">HashTag del evento</p>
                <span className='reminders__text'>Comparte tus mejores momentos usando el hashtag y etiqueta a @XVSofiaGuerrero</span>
            </div>
            <div className="reminders__decoration">
                <img src={maceta2} alt="maceta flowers" />
            </div>
        </section>
    )
}
