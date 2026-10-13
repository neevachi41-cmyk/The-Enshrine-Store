import { useState, useEffect } from 'react'
import Header from './components/Header'
import UpdatesSection from './components/sections/UpdatesSection'
import Shop from './components/Shop'
import ReviewsSection from './components/sections/ReviewsSection'
import Footer from './components/Footer'
import CustomModal from './components/CustomModal'
import ProductModal from './components/ProductModal'
import SearchModal from './components/SearchModal'
import AdminPanel from './components/AdminPanel'
import { DEMO_PRODUCTS, CATS, THEME_DATA, UPDATES, REVIEWS } from './data'

function App() {
  const [products, setProducts] = useState(DEMO_PRODUCTS)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentTheme, setCurrentTheme] = useState('female')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showCustomModal, setShowCustomModal] = useState(false)
  const [showProductModal, setShowProductModal] = useState(false)
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

    // Load dark mode preference
    const savedDarkMode = localStorage.getItem('fizzDarkMode')
    if (savedDarkMode === 'true') {
      setIsDarkMode(true)
      document.body.classList.add('dark-mode')
    }
  }, [])

  const saveProducts = (newProducts) => {
    setProducts(newProducts)
    localStorage.setItem('fizzProducts', JSON.stringify(newProducts))
  }

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'female' ? 'male' : 'female')
  }

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev
      if (newMode) {
        document.body.classList.add('dark-mode')
        localStorage.setItem('fizzDarkMode', 'true')
      } else {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('fizzDarkMode', 'false')
      }
      return newMode
    })
  }

  const openCustom = (title) => {
    setCustomTitle(title === 'General Customisation' ? 'Make it yours' : title)
    setShowCustomModal(true)
  }

  const viewProduct = (id) => {
    const product = products.find(p => p.id === id)
    if (product) {
      setSelectedProduct(product)
      setShowProductModal(true)
    }
  }

  const productOrderNow = () => {
    if (selectedProduct) {
      const msg = `Hello FIZZ!%0A%0AI want to order: ${encodeURIComponent(selectedProduct.name)}%0APrice: ${encodeURIComponent(selectedProduct.price)}%0A%0APlease confirm availability and payment details.`
      window.open(`https://wa.me/919999999999?text=${msg}`, '_blank')
      showToast('Opening WhatsApp to place your order…')
      setShowProductModal(false)
    }
  }

  const openProductInNewWindow = (id) => {
    const product = products.find(p => p.id === id)
    if (product) {
      const newWindow = window.open('', '_blank')
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${product.name} - FIZZ</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px 20px; background: #fff; }
            h1 { color: #241b32; margin-bottom: 20px; }
            img { max-width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
            .desc { color: #756b80; line-height: 1.7; font-size: 16px; }
            .price { font-size: 28px; font-weight: bold; color: #6f46c7; margin: 20px 0; }
            .buttons { display: flex; gap: 15px; margin-top: 30px; }
            button { padding: 16px 32px; border: none; border-radius: 50px; cursor: pointer; font-weight: bold; font-size: 16px; flex: 1; }
            .customize { background: #f3effa; color: #6f46c7; }
            .customize:hover { background: #e9e0f7; }
            .order { background: #6f46c7; color: white; }
            .order:hover { background: #8a63d2; }
          </style>
        </head>
        <body>
          <h1>${product.name}</h1>
          <img src="${product.img}" alt="${product.name}">
          <p class="desc">${product.desc}</p>
          <div class="price">${product.price}</div>
          <div class="buttons">
            <button class="customize" onclick="window.close()">Close</button>
            <button class="order" onclick="window.open('https://wa.me/919999999999?text=Hello FIZZ!%0A%0AI want to order: ${encodeURIComponent(product.name)}%0APrice: ${encodeURIComponent(product.price)}', '_blank')">Order Now</button>
          </div>
        </body>
        </html>
      `)
      newWindow.document.close()
    }
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
      <Header
        themeData={themeData}
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
        onSearchClick={() => setShowSearchModal(true)}
        onAdminClick={() => setShowAdmin(true)}
        onDarkModeToggle={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      
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
        />
      )}

      <Footer />
      
      {showCustomModal && (
        <CustomModal
          title={customTitle}
          onClose={() => setShowCustomModal(false)}
          onSubmit={(data) => {
            const msg = `Hello FIZZ!%0A%0AI want to enquire about: ${encodeURIComponent(data.product || 'a custom product')}%0AName: ${encodeURIComponent(data.name || 'Not provided')}%0APhone: ${encodeURIComponent(data.phone || 'Not provided')}%0ADetails: ${encodeURIComponent(data.details || 'Not provided')}`
            window.open(`https://wa.me/919999999999?text=${msg}`, '_blank')
            showToast('Opening WhatsApp with your enquiry…')
            setShowCustomModal(false)
          }}
        />
      )}

      {showProductModal && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setShowProductModal(false)}
          onOrderNow={productOrderNow}
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
