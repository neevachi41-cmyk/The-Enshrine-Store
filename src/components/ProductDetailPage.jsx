import { useState } from 'react'

function ProductDetailPage({ product, onClose, onAddToCart, onBuyNow }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState('White')

  const colorOptions = [
    { name: 'White', value: '#FFFFFF' },
    { name: 'Red', value: '#FF0000' },
    { name: 'Blue', value: '#0000FF' },
    { name: 'Green', value: '#008000' },
    { name: 'Yellow', value: '#FFFF00' },
    { name: 'Orange', value: '#FFA500' },
    { name: 'Purple', value: '#800080' },
    { name: 'Gray', value: '#808080' },
    { name: 'Silver', value: '#C0C0C0' }
  ]

  const getColorFilter = (colorName) => {
    const color = colorOptions.find(c => c.name === colorName)
    if (!color) return 'none'
    
    switch(colorName) {
      case 'White':
        return 'none'
      case 'Red':
        return 'sepia(1) saturate(10) hue-rotate(-50deg)'
      case 'Blue':
        return 'sepia(1) saturate(10) hue-rotate(180deg)'
      case 'Green':
        return 'sepia(1) saturate(10) hue-rotate(90deg)'
      case 'Yellow':
        return 'sepia(1) saturate(10) hue-rotate(10deg)'
      case 'Orange':
        return 'sepia(1) saturate(10) hue-rotate(-20deg)'
      case 'Purple':
        return 'sepia(1) saturate(10) hue-rotate(240deg)'
      case 'Gray':
        return 'grayscale(1) brightness(0.8)'
      case 'Silver':
        return 'grayscale(0.3) brightness(1.2)'
      default:
        return 'none'
    }
  }

  if (!product) return null

  const images = [product.img] // Add more images if available

  const increaseQuantity = () => setQuantity(prev => prev + 1)
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  const savings = product.originalPrice
    ? parseInt(product.originalPrice.replace('₹', '')) - parseInt(product.price.replace('₹', ''))
    : 0

  return (
    <div className="product-detail-page">
      <button className="back-button" onClick={onClose}>
        ← Back to Products
      </button>

      <div className="product-detail-container">
        {/* Left Side - Image Gallery */}
        <div className="product-gallery">
          <div className="main-image-wrapper">
            {product.discount && (
              <div className="discount-badge">-{product.discount} OFF</div>
            )}
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="main-image"
              style={{
                filter: getColorFilter(selectedColor)
              }}
            />
          </div>

          {images.length > 1 && (
            <div className="thumbnail-gallery">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Side - Product Info */}
        <div className="product-info">
          <div className="product-category">{product.cat} & {product.sub}</div>
          <h1 className="product-title">{product.name}</h1>

          <div className="price-section">
            <span className="current-price">{product.price}</span>
            {product.originalPrice && (
              <>
                <span className="original-price">{product.originalPrice}</span>
                <span className="savings">Save ₹{savings}</span>
              </>
            )}
          </div>

          <p className="product-description">{product.desc}</p>

          {product.features && (
            <div className="features-section">
              <h3>Why You'll Love It</h3>
              <ul className="features-list">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="color-section">
            <label>Color</label>
            <div className="color-selector">
              {colorOptions.map((color) => (
                <button
                  key={color.name}
                  className={`color-option ${selectedColor === color.name ? 'selected' : ''}`}
                  onClick={() => setSelectedColor(color.name)}
                  title={color.name}
                >
                  <span className="color-swatch" style={{ backgroundColor: color.value }}></span>
                  <span className="color-name">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-section">
            <label>Quantity</label>
            <div className="quantity-selector">
              <button onClick={decreaseQuantity} className="quantity-btn">-</button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="quantity-input"
              />
              <button onClick={increaseQuantity} className="quantity-btn">+</button>
            </div>
          </div>

          <div className={`stock-status ${product.stock.includes('Ready') ? 'in-stock' : 'made-to-order'}`}>
            {product.stock}
          </div>

          <div className="action-buttons">
            <button
              className="btn add-to-cart"
              onClick={() => onAddToCart(product, quantity, selectedColor)}
            >
              <span className="cart-icon">🛒</span>
              Add to Cart
            </button>
            <button
              className="btn buy-now"
              onClick={() => onBuyNow(product, quantity, selectedColor)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
