import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface CarouselProps {
    images: string[]
    effect?: 'slide' | 'fade'
    autoplay?: boolean
    delay?: number
    navigation?: boolean
    pagination?: boolean
    className?: string
    imageClassName?: string
    loop?: boolean
}

export const Carousel: React.FC<CarouselProps> = ({
    images,
    effect = 'slide',
    autoplay = true,
    delay = 3000,
    navigation = false,
    pagination = true,
    className = '',
    imageClassName = '',
    loop = true,
}) => {
    const modules = []
    if (navigation) modules.push(Navigation)
    if (pagination) modules.push(Pagination)
    if (autoplay) modules.push(Autoplay)
    if (effect === 'fade') modules.push(EffectFade)

    return (
        <Swiper
            key={images.length}
            modules={modules}
            effect={effect}
            autoplay={autoplay ? { delay, disableOnInteraction: false } : false}
            navigation={navigation}
            pagination={pagination ? { clickable: true } : false}
            loop={loop}
            observer={true}
            observeParents={true}
            className={`my-swiper ${className}`}
        >
            {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                    <img src={src} alt={`slide-${idx}`} className={imageClassName} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
