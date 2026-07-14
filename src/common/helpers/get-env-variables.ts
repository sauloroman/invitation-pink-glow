export const getEnvVariables = () => {
    const env = import.meta.env

    return {
        VITE_INVITATION_DATE: env.VITE_INVITATION_DATE
    }
}