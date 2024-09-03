import { Link } from 'react-router-dom'
import NavLink from '../elements/NavLink'

export default function Navbar() {
  return (
    <nav className='flex justify-between px-10 py-5 border-b-2 border-black'>
        <div>
            <h1>Navbar</h1>
        </div>
        <div>
            <ul className='flex gap-5'>
                <li className='border-r-2 px-2 border-black'>
                    <NavLink href={"/"}>Home</NavLink>
                </li>
                <li className='border-r-2 px-2 border-black'>
                    <Link to={'/product'}>Product</Link>
                </li>
                <li className='border-r-2 px-2 border-black'>
                    <Link to={'/product/create'}>Product Create</Link>
                </li>
                <li className='border-r-2 px-2 border-black'>
                    <Link to={'/category'}>Category</Link>
                </li>
                <li className='border-r-2 px-2 border-black'>
                    <Link to={'/category/create'}>Category Create</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
