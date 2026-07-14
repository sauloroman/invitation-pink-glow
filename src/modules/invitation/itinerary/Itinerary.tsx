import React from 'react'
import { BookOpenTextIcon, ConfettiIcon, ForkKnifeIcon, HeartIcon, MartiniIcon, SparkleIcon, GuitarIcon, CloverIcon } from '@phosphor-icons/react'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import macetero from '@/assets/images/macetero.png'
import pajarillo from '@/assets/images/pajarillo-2.png'

interface ItineraryItemProps {
    icon: React.ReactNode;
    title: string;
    hour: string;
    description: string;
}

const ItineraryItem: React.FC<ItineraryItemProps> = ({ icon, title, hour, description }) => {
    return (
        <li className="itinerary__item flex">
            <div className="itinerary__item-icon-box">
                {icon}
            </div>
            <div className='itinerary__item-content'>
                <div className='flex justify-between items-center'>
                    <span className='itinerary__item-name'>{title}</span>
                    <div className="itinerary__item-hour">{hour} </div>
                </div>
                <div className="itinerary__item-description">
                    {description}
                </div>
            </div>
        </li>
    )
}

const itineraryList: ItineraryItemProps[] = [
    {
        icon: <HeartIcon size={28} className='itinerary__item-icon' />,
        title: 'Recepción de invitados',
        hour: '21:00 ',
        description: 'Bievenida en el lugar del evento'
    },
    {
        icon: <MartiniIcon size={28} className='itinerary__item-icon' />,
        title: 'Coctél de Bienvenida',
        hour: '21:30 ',
        description: 'Bebida temporal para amenizar'
    },
    {
        icon: <SparkleIcon size={28} className='itinerary__item-icon' />,
        title: 'Vals',
        hour: '22:15 ',
        description: 'Vals, momento especial'
    },
    {
        icon: <ForkKnifeIcon size={28} className='itinerary__item-icon' />,
        title: 'Cena (3 tiempos)',
        hour: '22:50',
        description: 'Momento para disfrutar'
    },
    {
        icon: <ConfettiIcon size={28} className='itinerary__item-icon' />,
        title: 'Fiesta (DJ)',
        hour: '23:30',
        description: 'Se abre la pista'
    },
    {
        icon: <GuitarIcon size={28} className='itinerary__item-icon' />,
        title: 'Música Banda',
        hour: '01:00',
        description: 'Seguimos la fiesta con banda'
    },
    {
        icon: <CloverIcon size={28} className='itinerary__item-icon' />,
        title: 'Fin del Evento',
        hour: '03:00',
        description: 'Hora de despedirnos'
    }
]

export const Itinerary: React.FC = () => {
    return (
        <section className='itinerary'>
            <img src={pajarillo} alt="pajarillo" className='itinerary__decoration itinerary__decoration--left' />
            <div className='itinerary__container'>
                <div className="itinerary__header flex flex-col items-center gap-2">
                    <BookOpenTextIcon weight='thin' className='itinerary__header-icon' size={48} />
                    <SectionHeader
                        subtitle='Itinerario'
                        title='Programa del Día'
                    />
                </div>

                <ul className="itinerary__list flex flex-col">
                    {
                        itineraryList.map((item, index) => (
                            <ItineraryItem key={index} {...item} />
                        ))
                    }
                </ul>
            </div>
            <img src={macetero} alt="macetero" className='itinerary__decoration itinerary__decoration--right' />
        </section>
    )
}
