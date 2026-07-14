import React from 'react'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import decoration from '@/assets/images/tendido.png'
import { ConfirmationForm } from './ConfirmationForm'

export const Confirmation: React.FC = () => {
    return (
        <section className='confirmation'>
            <div className="confirmation__container">
                <div className="confirmation__header flex flex-col items-center text-center">
                    <SectionHeader
                        subtitle='RSVP'
                        title='Confirmación'
                    />
                    <p className='confirmation__text'>Ingresa los siguientes datos para confirmar tu asistencia a la fiesta.</p>
                </div>

                <ConfirmationForm />
            </div>
            <div className="confirmation__decoration">
                <img src={decoration} alt="Decoración" />
            </div>
        </section>
    )
}
