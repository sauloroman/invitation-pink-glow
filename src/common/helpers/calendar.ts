/**
 * Generates and downloads a universal .ics (iCalendar) file for the event.
 */
export const downloadCalendarEvent = (): void => {
    const title = 'XV Años Sofía Guerrero'
    const description = '¡Te invitamos a celebrar los XV Años de Sofía! Recuerda revisar el itinerario y ubicación en tu invitación digital.'
    const location = 'Templo de la Purísima Concepción / Casa de piedra'
    const startDate = '20261210T190000'
    const endDate = '20261211T030000'

    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//PinkGlow//Quinceanera Calendar//ES',
        'CALSCALE:GREGORIAN',
        'BEGIN:VEVENT',
        `SUMMARY:${title}`,
        `DESCRIPTION:${description}`,
        `LOCATION:${location}`,
        `DTSTART:${startDate}`,
        `DTEND:${endDate}`,
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n')

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'recordatorio-xv-sofia.ics'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
