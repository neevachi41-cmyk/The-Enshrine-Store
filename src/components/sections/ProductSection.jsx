import ProductCard from './ProductCard'

function ProductSection({ category, products, onCustomClick, onProductClick }) {
  const categoryProducts = products.filter(p => p.cat === category)

  if (!categoryProducts.length) return null

  return (
    <div className="product-section">
      <div className="section-head">
        <div>
          <h2>{category}</h2>
        </div>
      </div>
      <div className="grid">
        {categoryProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onCustomClick={onCustomClick}
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductSection
