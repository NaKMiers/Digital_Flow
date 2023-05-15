import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import ScrollToTopButton from './components/ScrollToTopButton'
import AgencyPage from './pages/AgencyPage'
import BlogPage from './pages/BlogPage'
import BlogsPage from './pages/BlogsPage'
import CasesPage from './pages/CasesPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ServicesPage from './pages/ServicesPage'

function App() {
   return (
      <div className={styles.App}>
         <Header />
         <Header fixed />

         <div style={{ height: '200vh' }}></div>

         <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/agency' exact element={<AgencyPage />} />
            <Route path='/services' exact element={<ServicesPage />} />
            <Route path='/cases' exact element={<CasesPage />} />
            <Route path='/cases/:id' exact={false} element={<ProductPage />} />
            <Route path='/blogs' exact element={<BlogsPage />} />
            <Route path='/blogs/:id' exact={false} element={<BlogPage />} />
            <Route path='/contact' exact element={<ContactPage />} />
         </Routes>

         <ScrollToTopButton />

         <Newsletter />
         <Footer />
      </div>
   )
}

export default App
