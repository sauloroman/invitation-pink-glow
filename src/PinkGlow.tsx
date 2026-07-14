import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { AppRouter } from './router/AppRouter'

export const PinkGlow: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
