/**
 * Opens an external URL in a new window or tab.
 * @param url The external URL to navigate to.
 */
export const openExternalLink = (url?: string): void => {
    if (!url) return
    window.open(url, '_blank', 'noopener,noreferrer')
}

/**
 * Scrolls smoothly to a target element selector.
 * @param selector The CSS selector of the target element.
 */
export const scrollToElement = (selector: string): void => {
    const element = document.querySelector(selector)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}
