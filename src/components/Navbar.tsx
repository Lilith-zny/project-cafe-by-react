import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
      <nav className="hidden md:flex">
        <div className="container mx-auto max-w-[1320px] md:px-10 md:h-[50px] flex flex-col md:flex-row md:justify-between md:items-center border-b-1 border-[#846046]">
          <div>
            <Link to='/'>
              <h2 className="font-bold text-[27px]">Café Bliss</h2>
            </Link>
          </div>
          <form>
            <Link to='/cart'>
              <IoCartOutline size={25} />
            </Link>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar