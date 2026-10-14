function FooterLogo() {
  return (
    <div>
      <img
        className="footer-logo"
        src="/assets/logo.png"
        alt="Enshrine"
        style={{
          height: '60px',
          width: 'auto',
          maxWidth: '200px',
          objectFit: 'contain',
          display: 'block',
          marginBottom: '12px',
          filter: 'brightness(0) invert(1)',
          opacity: 0.95
        }}
        onError={(e) => {
          console.error('Footer logo failed to load:', e.target.src);
          e.target.style.display = 'none';
        }}
      />
      <p style={{ marginTop: '12px', color: 'var(--muted)', fontSize: '13px', lineHeight: '1.6' }}>
        Gifts for brighter days. We create personalized aesthetic objects that bring joy to your space.
      </p>
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', fontSize: '24px', textDecoration: 'none' }}>
          📷
        </a>
        <a href="https://wa.me/919021282176" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', fontSize: '24px', textDecoration: 'none' }}>
          💬
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', fontSize: '24px', textDecoration: 'none' }}>
          📘
        </a>
      </div>
    </div>
  )
}

export default FooterLogo
