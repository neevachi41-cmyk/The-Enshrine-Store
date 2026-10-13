import { useState, useEffect } from 'react'

function HeroSlider({ updates }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % updates.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + updates.length) % updates.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused])

  if (!updates || updates.length === 0) return null

  const currentUpdate = updates[currentIndex]

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="slider-container">
        {updates.map((update, index) => (
          <div
            key={update.id}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transform: `translateX(${(index - currentIndex) * 100}%)`
            }}
          >
            <div className="slide-image">
              <img
                src={update.image}
                alt={update.title}
                onError={(e) => {
                  console.error('Image failed to load:', update.image)
                  e.target.style.display = 'none'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous slide">
        ‹
      </button>
      <button className="slider-arrow next" onClick={nextSlide} aria-label="Next slide">
        ›
      </button>
    </div>
  )
}

export default HeroSlider
