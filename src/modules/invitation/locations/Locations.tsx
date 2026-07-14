import React from 'react'
import { MapPinIcon } from '@phosphor-icons/react'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import { openExternalLink } from '@/common/helpers/navigation'
import photo from '@/assets/images/3.jpg'
import lampara from '@/assets/images/lampara.png'
import place from '@/assets/images/place.png'

interface LocationItem {
    concept: string,
    hour: string,
    name: string,
    address: string,
    linkAddress: string,
}

const locations: LocationItem[] = [
    {
        concept: 'Ceremonia Religiosa',
        hour: '07:00 P.M',
        name: 'Templo de la Purísima Concepción',
        address: 'Av. Alameda 102, Barrio de la Purísima, 20259 Aguascalientes, Ags.',
        linkAddress: 'https://maps.app.goo.gl/DwcJiUXpPKcksyiv9',
    },
    {
        concept: 'Recepción',
        hour: '09:00 P.M',
        name: 'Casa de piedra',
        address: 'Av. Guadalupe Gonzalez 1116, 20329 Pocitos, Ags.',
        linkAddress: 'https://maps.app.goo.gl/QycMsKpf1Awo9TqG8',
    },
]

export const Locations: React.FC = () => {
    return (
        <section className='locations'>

            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,150 C 123.42583732057417,149.4736842105263 246.85167464114835,148.94736842105263 338,146 C 429.14832535885165,143.05263157894737 488.01913875598086,137.68421052631578 572,148 C 655.9808612440191,158.31578947368422 765.0717703349283,184.31578947368422 868,195 C 970.9282296650717,205.68421052631578 1067.6937799043062,201.05263157894737 1162,191 C 1256.3062200956938,180.94736842105263 1348.153110047847,165.4736842105263 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ede2e7" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,600 L 0,350 C 99.16746411483251,341.1674641148325 198.33492822966502,332.334928229665 299,341 C 399.665071770335,349.665071770335 501.82775119617224,375.82775119617224 599,390 C 696.1722488038278,404.17224880382776 788.354066985646,406.35406698564594 882,387 C 975.645933014354,367.64593301435406 1070.755980861244,326.75598086124404 1164,317 C 1257.244019138756,307.24401913875596 1348.622009569378,328.62200956937795 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ede2e7" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>

            <div className="locations__container">
                <div className="locations__header flex flex-col items-center gap-2">
                    <MapPinIcon className='locations__header-icon' size={48} weight='thin' />
                    <SectionHeader
                        title='Los Recintos'
                        subtitle='Lugares de la Celebración'
                    />
                </div>

                <ul className="locations__list">
                    {locations.map((location, index) => (
                        <>
                            <li className="locations__item" key={location.name}>
                                <header className="locations__item-header">
                                    <span className='locations__item-concept'>{location.concept}</span>
                                    <span className="locations__item-hour">{location.hour}</span>
                                </header>

                                <h3 className="locations__item-name">{location.name}</h3>
                                <p className="locations__item-address">{location.address}</p>

                                <div className="locations__item-button">
                                    <button onClick={() => openExternalLink(location.linkAddress)} className='btn btn--pink'>Ver Ubicación</button>
                                </div>
                            </li>
                            {index === 0 && <div className='locations__place'>
                                <img className='locations__place-img' src={place} alt="Kiosko" />
                            </div>}
                        </>
                    ))}
                </ul>
                <div className="locations__image">
                    <div className='locations__image-img' style={{ backgroundImage: `url(${photo})` }}>
                        <div className="locations__image-overlay"></div>
                    </div>
                    <img src={lampara} alt="Iluminación XV Años" className='locations__image-ornament' />
                    <p className="locations__image-note">Sofía Guerrero</p>
                </div>
            </div>

            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,150 C 101.68421052631578,174.53588516746413 203.36842105263156,199.07177033492823 314,197 C 424.63157894736844,194.92822966507177 544.2105263157895,166.2488038277512 628,171 C 711.7894736842105,175.7511961722488 759.7894736842105,213.93301435406698 833,205 C 906.2105263157895,196.06698564593302 1004.6315789473683,140.01913875598086 1110,123 C 1215.3684210526317,105.98086124401914 1327.6842105263158,127.99043062200957 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ede2e7" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><path d="M 0,600 L 0,350 C 107.04306220095694,366.11483253588517 214.08612440191388,382.22966507177034 309,393 C 403.9138755980861,403.77033492822966 486.6985645933014,409.1961722488038 569,388 C 651.3014354066986,366.8038277511962 733.1196172248806,318.9856459330143 830,320 C 926.8803827751194,321.0143540669857 1038.822966507177,370.8612440191388 1143,384 C 1247.177033492823,397.1387559808612 1343.5885167464116,373.5693779904306 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ede2e7" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path></svg>

        </section>
    )
}
