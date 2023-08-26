import { Routes, Route } from 'react-router-dom'

import Header from 'app/components/navigation/header'
import Footer from 'app/components/navigation/footer'
import Home from 'app/pages/home'

export default function PublicRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
