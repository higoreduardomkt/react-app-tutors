import { BrowserRouter as Router } from 'react-router-dom'
import PublicRoutes from './layouts/public-routes'

export default function app() {
  return (
    <Router>
      <PublicRoutes />
    </Router>
  )
}
