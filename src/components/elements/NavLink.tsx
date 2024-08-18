import { Link } from "react-router-dom"

type NavLinkProps = {
    children: React.ReactNode
    href: string
}
export default function NavLink({children, href}: NavLinkProps) {
  return <Link to={href}>{children}</Link>
}
