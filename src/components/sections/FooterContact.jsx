function FooterContact() {
  return (
    <div>
      <h4>Contact</h4>
      <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', fontSize: '20px', textDecoration: 'none' }}>
          📷
        </a>
        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', fontSize: '20px', textDecoration: 'none' }}>
          💬
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', fontSize: '20px', textDecoration: 'none' }}>
          📘
        </a>
      </div>
    </div>
  )
}

export default FooterContact
