import HeroSlider from './sections/HeroSlider'

function Hero({ themeData, onCustomClick }) {
  const sliderImages = [
    {
      id: 1,
      image: '/assets/Enshrine Purple Gift Store Logo.png',
      title: 'Enshrine Purple Gift Store'
    },
    {
      id: 2,
      image: '/assets/Feelings Deserve a Little Light.png',
      title: 'Feelings Deserve a Little Light'
    },
    {
      id: 3,
      image: '/assets/Holographic Lyrics in the Air.png',
      title: 'Holographic Lyrics in the Air'
    },
    {
      id: 4,
      image: '/assets/Meet the Sproutie Robot Companions.png',
      title: 'Meet the Sproutie Robot Companions'
    },
    {
      id: 5,
      image: '/assets/Personalized Gifts, Cozy Dreams.png',
      title: 'Personalized Gifts, Cozy Dreams'
    }
  ]

  return (
    <section className="hero">
      <HeroSlider updates={sliderImages} />
    </section>
  )
}

export default Hero
