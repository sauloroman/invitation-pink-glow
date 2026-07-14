import { ParticleRain } from '@/common'
import React from 'react'

export const Farewell: React.FC = () => {
    return (
        <footer className='farewell'>
            <div className="farewell__container">
                <ParticleRain
                    className='farewell__particle'
                    isActive={true}
                    colors={['#f9f9f9', '#eeecec', '#ede2e7', '#e4d4dc', '#c8a9b8', '#b68ca1', '#a46f89']}
                    particleCount={5}
                    intervalMs={200}
                    gravity={0.4}
                    scalar={0.6}
                />
                <div className='farewell__info'>
                    <h3 className="farewell__title">Sofía Guerrero</h3>
                    <p className="farewell__text">&mdash; 10 de Diciembre del 2026 &mdash;</p>
                </div>

                <div className="farewell__line"></div>

                <div className="farewell__footer">
                    <p>Hecho con amor por <a href="https://tumigo.mx" target="_blank" rel="noopener noreferrer">TuAmigoInvitaciones</a></p>
                </div>
            </div>
        </footer>
    )
}
