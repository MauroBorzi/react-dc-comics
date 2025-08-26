
const NavBar = () => {

  const links = [
    {
      id: 1,
      label: "CHARACTERS",
      href: "#",
      current: false
    },
    {
      id: 2,
      label: "COMICS",
      href: "#",
      current: true
    },
    {
      id: 3,
      label: "MOVIES",
      href: "#",
      current: false
    },
    {
      id: 4,
      label: "TV",
      href: "#",
      current: false
    },
    {
      id: 5,
      label: "GAMES",
      href: "#",
      current: false
    },
    {
      id: 6,
      label: "COLLECTIBLES",
      href: "#",
      current: false
    },
    {
      id: 7,
      label: "VIDEOS",
      href: "#",
      current: false
    },
    {
      id: 8,
      label: "FANS",
      href: "#",
      current: false
    },
    {
      id: 9,
      label: "NEWS",
      href: "#",
      current: false
    },
    {
      id: 10,
      label: "SHOP",
      href: "#",
      current: false
    },
  ]

  return (
    <nav className="col-75 pt-40">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className={link.current === true ? `active ` : ``}>{link.label}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar
