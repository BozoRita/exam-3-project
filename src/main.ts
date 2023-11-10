import './app.css'
import App from './App.svelte'

// root
import { makeServer } from './api/mockserver'
makeServer({ environment: 'development' })

const app = new App({
  target: document.getElementById('app'),
})

export default app
