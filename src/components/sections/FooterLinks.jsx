function FooterLinks() {
  return (
    <>
      <div>
        <h4>Contact</h4>
        <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.7' }}>
          <a href="mailto:contact@enshrine.com" style={{ color: 'inherit', textDecoration: 'none' }}>contact@enshrine.com</a>
        </p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.7' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>All Products</a>
          <a href="#custom" style={{ color: 'inherit', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>Custom Printing</a>
        </p>
      </div>
      <div>
        <h4>Legal</h4>
        <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.7' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>Terms & Conditions</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>Refund Policy</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>Shipping Policy</a>
        </p>
      </div>
    </>
  )
}

export default FooterLinks
