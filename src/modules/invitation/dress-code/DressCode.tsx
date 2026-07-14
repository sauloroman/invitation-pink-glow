import React from 'react'
import photo from '@/assets/images/6.jpg'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'

export const DressCode: React.FC = () => {
    return (
        <section className='dress-code'>
            <div className="dress-code__container" style={{ backgroundImage: `url(${photo})` }}>
                <div className="dress-code__overlay"></div>
                <div className="dress-code__content">
                    <div className="dress-code__messages">
                        <SectionHeader title='Formal' subtitle='Dress Code' />
                        <div className="dress-code__names">
                            <p className='dress-code__text'>Mujeres: <span className='dress-code__text--name'>Vestido de noche</span></p>
                            <p className='dress-code__text'>Hombres: <span className='dress-code__text--name'>Traje / Smoking</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
