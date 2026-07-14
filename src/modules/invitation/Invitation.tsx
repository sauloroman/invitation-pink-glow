import React from 'react'
import { Hero, Countdown, Family, DressCode, Locations, Reminders, Itinerary, Guest, Presents, Confirmation, Farewell } from './'

export const Invitation: React.FC = () => {
    return (
        <div id='invitation' className='invitation'>
            <>
                <Hero />
                <Countdown />
                <Family />
                <Guest />
                <Locations />
                <Reminders />
                <DressCode />
                <Itinerary />
                <Presents />
                <Confirmation />
                <Farewell />
            </>
        </div>
    )
}
