function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <span className="eyebrow">OUR STORY</span>
          <h1>About Enshrine</h1>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Enshrine, we believe that gifts should be more than just objects—they should be meaningful moments that bring joy and create lasting memories. Our mission is to craft personalized aesthetic pieces that transform ordinary spaces into extraordinary experiences.
            </p>
          </div>

          <div className="about-section">
            <h2>What We Do</h2>
            <p>
              We specialize in creating unique, handcrafted gifts and decor items that blend artistry with personalization. From custom 3D-printed lamps to OLED displays and memory lights, each piece is designed to tell a story and evoke emotion.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">✨</div>
              <h3>Personalized</h3>
              <p>Every item can be customized to reflect your unique style and personality.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🎨</div>
              <h3>Artistic</h3>
              <p>Our designs blend modern aesthetics with heartfelt craftsmanship.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">💝</div>
              <h3>Meaningful</h3>
              <p>Create gifts that tell stories and preserve precious memories.</p>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <ul className="values-list">
              <li><strong>Creativity:</strong> We push boundaries to create innovative designs</li>
              <li><strong>Quality:</strong> Every piece is crafted with attention to detail</li>
              <li><strong>Personalization:</strong> Your vision becomes our creation</li>
              <li><strong>Sustainability:</strong> We use eco-friendly materials and processes</li>
            </ul>
          </div>

          <div className="about-cta">
            <h2>Ready to Create Something Special?</h2>
            <p>Let's work together to bring your vision to life.</p>
            <button className="btn primary" onClick={() => window.location.href = '/#custom'}>
              Start Customizing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
