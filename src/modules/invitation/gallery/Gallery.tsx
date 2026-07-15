import React from 'react'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import { Carousel } from '@/common'
import { ImageIcon } from '@phosphor-icons/react'

// Import all gallery photos
import photo1 from '@/assets/images/1.jpg'
import photo2 from '@/assets/images/2.jpg'
import photo3 from '@/assets/images/3.jpg'
import photo4 from '@/assets/images/4.jpg'
import photo5 from '@/assets/images/5.jpg'
import photo6 from '@/assets/images/6.jpg'
import photo7 from '@/assets/images/7.jpg'

const galleryImages = [photo1, photo2, photo3, photo4, photo5, photo6, photo7]

export const Gallery: React.FC = () => {
    return (
        <section className='gallery' id='gallery'>
            <div className="gallery__container">
                <div className="gallery__header">
                    <ImageIcon className='gallery__header-icon' size={48} weight='thin' />
                    <SectionHeader
                        subtitle='Mis Momentos'
                        title='Galería de Fotos'
                    />
                </div>

                <div className="gallery__carousel-wrapper">
                    <Carousel
                        images={galleryImages}
                        effect='slide'
                        navigation={true}
                        pagination={true}
                        autoplay={true}
                        delay={4000}
                        className='gallery__carousel'
                        imageClassName='gallery__carousel-img'
                    />
                </div>
            </div>
        </section>
    )
}
