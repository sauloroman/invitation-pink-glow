import React from 'react'
import photo from '@/assets/images/5.jpg'
import { HeartIcon } from '@phosphor-icons/react'
import { ParticleRain } from '@/common/components/ParticleRain'

export const Hero: React.FC = () => {
    return (
        <section className='hero'>
            <div className="hero__overlay"></div>
            <div className="hero__bg" style={{ backgroundImage: `url(${photo})` }}></div>
            <ParticleRain
                className='hero__particle'
                isActive={true}
                colors={['#f9f9f9', '#eeecec', '#ede2e7', '#e4d4dc', '#c8a9b8', '#b68ca1', '#a46f89']}
                particleCount={5}
                intervalMs={200}
                gravity={0.4}
                scalar={0.6}
            />
            <div className="hero__container">
                <div className="hero__main">
                    <HeartIcon className='hero__main-icon' weight="regular" size={32} />
                    <h1 className='hero__main-title'>Sofía <br />Guerrero</h1>
                    <span className='hero__main-subtitle'>Mis XV Años</span>
                </div>
            </div>
        </section>
    )
}
