import React from 'react'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import photo1 from '@/assets/images/1.jpg'
import photo2 from '@/assets/images/2.jpg'
import photo3 from '@/assets/images/3.jpg'
import photo4 from '@/assets/images/4.jpg'
import photo5 from '@/assets/images/5.jpg'
import jarron from '@/assets/images/jarron-2.png'
import { CalendarBlankIcon, CheckIcon } from '@phosphor-icons/react'
import { downloadCalendarEvent } from '@/common/helpers/calendar'
import { scrollToElement } from '@/common/helpers/navigation'
import { Carousel } from '@/common'

export const Guest: React.FC = () => {
    return (
        <section className='guest'>
            <div className="guest__wrapper">
                <div className="guest__container">
                    <div className="guest__content">
                        <div className="guest__header flex flex-col justify-center items-center">
                            <CheckIcon className='guest__header-icon' size={48} weight='thin' />
                            <SectionHeader
                                subtitle='RSVP'
                                title='Invitado Especial'
                            />
                        </div>

                        <p className="guest__text">
                            Saulo Román Santillán Nava
                        </p>

                        <div className="guest__buttons">
                            <button className='btn btn--pink'>Ver Boletos</button>
                            <button onClick={() => scrollToElement('.confirmation')} className='btn btn--outline'>Confirmar Asistencia</button>
                        </div>
                        <div className='guest__footer'>
                            <p>
                                Por favor, confirma tu asistencia antes del
                                <strong>&nbsp;10 de Noviembre</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='guest__end'>
                <img className='guest__jarron' src={jarron} alt="Jarrón" />
                <div className="guest__date-container">
                    <p className='guest__date'>10 <span className='dot'></span>12 <span className='dot'></span>2026</p>
                    <p className='guest__datetext'>¡No Faltes!</p>
                    <div className="countdown__button">
                        <button
                            onClick={downloadCalendarEvent}
                            className="btn btn--pink flex items-center justify-center gap-1"
                        >
                            <CalendarBlankIcon size={20} weight='thin' />
                            Save the date
                        </button>
                    </div>
                </div>
            </div>

            <Carousel
                images={[photo1, photo2, photo3, photo4, photo5]}
                effect='fade'
                className='guest__photo'
                imageClassName='guest__photo-img'
                autoplay={true}
                delay={2500}
                pagination={true}
            />
        </section>
    )
}
