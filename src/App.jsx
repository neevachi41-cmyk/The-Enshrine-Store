import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Header from './components/Header'
import UpdatesSection from './components/sections/UpdatesSection'
import Shop from './components/Shop'
import ReviewsSection from './components/sections/ReviewsSection'
import Footer from './components/Footer'
import CustomModal from './components/CustomModal'
import ProductDetailPage from './components/ProductDetailPage'
import SearchModal from './components/SearchModal'
import AdminPanel from './components/AdminPanel'
import About from './components/About'
import { DEMO_PRODUCTS, CATS, THEME_DATA, UPDATES, REVIEWS } from './data'

function App() {
  const location = useLocation()
  const [products, setProducts] = useState(DEMO_PRODUCTS)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentTheme, setCurrentTheme] = useState('female')
  const [showCustomModal, setShowCustomModal] = useState(false)
  const [showProductDetail, setShowProductDetail] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [customTitle, setCustomTitle] = useState('Make it yours')
  const [searchQuery, setSearchQuery] = useState('')
  const [toast, setToast] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const savedProducts = localStorage.getItem('fizzProducts')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    }
    const adminSession = sessionStorage.getItem('fizzAdmin')
    if (adminSession === '1') {
      setIsAdmin(true)
    }

    // Initialize EmailJS
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY")
  }, [])

  const saveProducts = (newProducts) => {
    setProducts(newProducts)
    localStorage.setItem('fizzProducts', JSON.stringify(newProducts))
  }

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'female' ? 'male' : 'female')
  }

  const openCustom = (title) => {
    setCustomTitle(title === 'General Customisation' ? 'Make it yours' : title)
    setShowCustomModal(true)
  }

  const viewProduct = (id) => {
    const product = products.find(p => p.id === id)
    if (product) {
      setSelectedProduct(product)
      setShowProductDetail(true)
      document.body.style.overflow = 'hidden'
    }
  }

  const closeProductDetail = () => {
    setShowProductDetail(false)
    setSelectedProduct(null)
    document.body.style.overflow = 'auto'
  }

  const addToCart = (product, quantity, color = 'White') => {
    showToast(`${quantity}x ${product.name} (${color}) added to cart`)
  }

  const buyNow = (product, quantity, color = 'White') => {
    const msg = `Hello Enshrine!%0A%0AI want to order: ${encodeURIComponent(product.name)}%0AColor: ${encodeURIComponent(color)}%0AQuantity: ${quantity}%0APrice: ${encodeURIComponent(product.price)}%0ATotal: ${encodeURIComponent(product.price.replace('₹', '') * quantity)}%0A%0APlease confirm availability and payment details.`
    window.open(`https://wa.me/919021282176?text=${msg}`, '_blank')
    showToast('Opening WhatsApp to place your order…')
    closeProductDetail()
  }

  const openProductInNewWindow = (id) => {
    viewProduct(id)
  }

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(''), 2600)
  }

  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === '123admin') {
      setIsAdmin(true)
      sessionStorage.setItem('fizzAdmin', '1')
      showToast('Logged in successfully')
    } else {
      showToast('Incorrect admin credentials')
    }
  }

  const handleLogout = () => {
    setIsAdmin(false)
    sessionStorage.removeItem('fizzAdmin')
    setShowAdmin(false)
    showToast('Logged out')
  }

  const themeData = THEME_DATA[currentTheme]

  const handleShopClick = () => {
    document.getElementById('store').scrollIntoView({ behavior: 'smooth' })
  }

  const handleViewClick = () => {
    setSelectedCategory('all')
    document.getElementById('store').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {location.pathname !== '/about' && (
        <Header
          themeData={themeData}
          currentTheme={currentTheme}
          toggleTheme={toggleTheme}
          onSearchClick={() => setShowSearchModal(true)}
          onAdminClick={() => setShowAdmin(true)}
        />
      )}

      <Routes>
        <Route path="/" element={
          <>
            {!showAdmin ? (
              <main id="store">
                <UpdatesSection updates={UPDATES} onShopClick={handleShopClick} onViewClick={handleViewClick} />
                <Shop
                  products={products}
                  categories={CATS}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  onCustomClick={openCustom}
                  onProductClick={openProductInNewWindow}
                  onViewProduct={viewProduct}
                />
                <ReviewsSection reviews={REVIEWS} />
              </main>
            ) : (
              <AdminPanel
                products={products}
                isAdmin={isAdmin}
                onLogin={handleLogin}
                onLogout={handleLogout}
                onBack={() => setShowAdmin(false)}
                onSaveProducts={saveProducts}
                onResetProducts={() => {
                  saveProducts(DEMO_PRODUCTS)
                  showToast('Demo catalog restored')
                }}
                onProductClick={openProductInNewWindow}
                onViewProduct={viewProduct}
              />
            )}

            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>

      {showProductDetail && selectedProduct && (
        <ProductDetailPage
          product={selectedProduct}
          onClose={closeProductDetail}
          onAddToCart={addToCart}
          onBuyNow={buyNow}
        />
      )}

      {showCustomModal && (
        <CustomModal
          title={customTitle}
          onClose={() => setShowCustomModal(false)}
          onSubmit={async (data) => {
            try {
              // Send email via EmailJS
              const templateParams = {
                to_email: "your-email@example.com", // Replace with your email
                from_name: data.name,
                from_email: data.phone,
                product: data.product || 'Custom enquiry',
                details: data.details,
                file: data.file || 'No file attached'
              }

              await emailjs.send(
                "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
                "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
                templateParams
              )

              showToast('Enquiry sent successfully!')
              setShowCustomModal(false)
            } catch (error) {
              console.error('Email error:', error)
              showToast('Failed to send enquiry. Please try again.')
            }
          }}
        />
      )}

      {showSearchModal && (
        <SearchModal
          products={products}
          query={searchQuery}
          onQueryChange={setSearchQuery}
          onClose={() => setShowSearchModal(false)}
          onProductClick={openProductInNewWindow}
        />
      )}

      {toast && <div id="toast" style={{ display: 'block' }}>{toast}</div>}
    </>
  )
}

export default App
