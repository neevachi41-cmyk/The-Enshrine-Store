import HeroSlider from './HeroSlider'

function UpdatesSection({ updates, onShopClick, onViewClick }) {
  return (
    <section className="updates-section">
      <HeroSlider updates={updates} onShopClick={onShopClick} onViewClick={onViewClick} />
    </section>
  )
}

export default UpdatesSection
