import FooterLogo from './sections/FooterLogo'
import FooterContact from './sections/FooterContact'
import FooterQuickLinks from './sections/FooterQuickLinks'
import FooterLegal from './sections/FooterLegal'
import FooterCopyright from './sections/FooterCopyright'

function Footer() {
  return (
    <footer id="contact">
      <div className="foot">
        <FooterLogo />
        <FooterContact />
        <FooterQuickLinks />
        <FooterLegal />
      </div>
      <FooterCopyright />
    </footer>
  )
}

export default Footer
