function ProductCard({ product, onCustomClick, onViewProduct, onProductClick }) {
  return (
    <article className="product" onClick={() => onProductClick(product.id)} style={{ cursor: 'pointer' }}>
      <div className="pimg">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="pbody">
        <div className="tag">{product.sub}</div>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <div className="price">{product.price}</div>
        <div className="card-actions">
          <button className="smallbtn" onClick={(e) => { e.stopPropagation(); onViewProduct(product.id) }}>View</button>
          <button
            className="smallbtn primary"
            onClick={(e) => { e.stopPropagation(); onCustomClick(product.name) }}
          >
            Order Now
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
