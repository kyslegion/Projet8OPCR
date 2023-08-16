
const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  )
}

const NavContent = () => (
  <>
    <h2>Biron Christopher</h2>
    <div>
      <a href="#root">Accueil</a>
      <a href="#formation">Formation</a>
      <a href="#work">Projets</a>
      <a href="#services">Technologies</a>
    </div>
      <a href="mailto:biron.christopher.desire@gmail.com">
        <button>Email</button>
      </a>
    </>
)
export default Header;