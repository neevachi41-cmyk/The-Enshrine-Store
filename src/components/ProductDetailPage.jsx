import { useState } from 'react'

function ProductDetailPage({ product, onClose, onAddToCart, onBuyNow }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

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
              onClick={() => onAddToCart(product, quantity)}
            >
              <span className="cart-icon">🛒</span>
              Add to Cart
            </button>
            <button
              className="btn buy-now"
              onClick={() => onBuyNow(product, quantity)}
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
