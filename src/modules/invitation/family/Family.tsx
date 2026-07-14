import React from 'react'
import { CalendarHeartIcon } from '@phosphor-icons/react'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import flower from '@/assets/images/flower.png'
import canasta from '@/assets/images/jarron.png'

export const Family: React.FC = () => {
    return (
        <section className='family'>
            <div className="family__container">
                <div className="family__header">
                    <CalendarHeartIcon className='family__header-icon' size={48} weight='thin' />
                    <SectionHeader
                        subtitle='En compañia de'
                        title='Nuestra Familia'
                    />
                    <div className="family__icon">
                        <img src={flower} alt="flowers" />
                    </div>
                </div>

                <div className="family__text">
                    Mi familia <span>siempre ha estado conmigo</span> y son mi motor para salir adelante. Agradezco su amor y apoyo incondicional.
                </div>

                <div className="family__card">
                    <div className="family__card-content">
                        <p className='family__parent'>Padres</p>
                        <div className='family__names'>
                            <p>Juan Guerrero Perez &</p>
                            <p>Maria Fernanda Ramirez</p>
                        </div>
                    </div>

                    <div className="family__card-content">
                        <p className='family__parent'>Padrinos</p>
                        <div className='family__names'>
                            <p>Jose Cruz Garcia &</p>
                            <p>Ana Martinez Hernandez</p>
                        </div>
                    </div>

                    <div className="family__canasta">
                        <img src={canasta} alt="flowers canasta" />
                    </div>
                </div>
            </div>
        </section>
    )
}
