import { pageLinks, socialLinks } from '../data'

const Footer = () => {
  return (
    <footer className='section footer'>
      {/* Navigation Links */}
      <ul className='footer-links'>
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className='footer-link'>
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>

      {/* Social Icons */}
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='footer-icon'
              >
                <i className={link.iconClass}></i>
              </a>
            </li>
          )
        })}
      </ul>

      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        {new Date().getFullYear()} all rights reserved
      </p>
    </footer>
  )
}
export default Footer
