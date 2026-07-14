import React from 'react'
import photo from '@/assets/images/4.jpg'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import { GiftIcon } from '@phosphor-icons/react'
import decoration from '@/assets/images/bicicleta.png'
import { openExternalLink } from '@/common/helpers/navigation'

export const Presents: React.FC = () => {
    return (
        <section className='presents'>
            <div className="presents__overlay"></div>
            <div className="presents__container" style={{ backgroundImage: `url(${photo})` }}>
                <div className="presents__content">
                    <div className="presents__header flex flex-col items-center">
                        <GiftIcon className='presents__header-icon' size={48} weight='thin' />
                        <SectionHeader
                            subtitle='Regalos'
                            title='Mesa de Regalos'
                        />
                    </div>
                    <p className='presents__text'>Agradecemos de todo corazon su cariño y afecto. Les compartimos nuestra mesa de regalos.</p>

                    <div className="presents__button">
                        <button onClick={() => openExternalLink('https://mesaderegalos.liverpool.com.mx/m/evento/xv-sofia-guerrero')} className='btn btn--pink flex items-center gap-1 justify-center'>
                            <GiftIcon size={24} weight='thin' className='present__icon' />
                            Mesa Liverpool
                        </button>
                    </div>

                    <div className="presents__decoration">
                        <img src={decoration} alt="Silla de decoración" />
                    </div>
                </div>
            </div>
        </section>
    )
}
