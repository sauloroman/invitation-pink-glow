import React from 'react'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import photo from '@/assets/images/1.jpg'
import jarron from '@/assets/images/jarron-2.png'
import monio from '@/assets/images/monio.png'
import { CalendarBlankIcon } from '@phosphor-icons/react'
import { downloadCalendarEvent } from '@/common/helpers/calendar'
import { scrollToElement } from '@/common/helpers/navigation'

export const Guest: React.FC = () => {
    return (
        <section className='guest'>
            <div className="guest__wrapper">
                <div className="guest__container">
                    <div className="guest__content">
                        <div className="guest__header">
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
                {/* <div className="guest__monio">
                    <img src={monio} alt="monio" className="guest__monio-img" />
                </div> */}
            </div>

            <div className="guest__photo" style={{ backgroundImage: `url(${photo})` }}>
            </div>
            <div className='guest__end'>
                <img className='guest__jarron' src={jarron} alt="Jarrón" />
                <div>
                    <p className='guest__date'>10 <span className='dot'></span>12 <span className='dot'></span>2026</p>
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
        </section>
    )
}
