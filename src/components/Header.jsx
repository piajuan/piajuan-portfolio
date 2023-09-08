import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};

const Header = () => {
  const scrollDirection = useScrollDirection();
  const [isHeaderOnTop, setIsHeaderOnTop] = useState(true);

  useEffect(()=> {
    window.onscroll = () =>
    window.pageYOffset === 0 ? setIsHeaderOnTop(true) : setIsHeaderOnTop(false);

    return () => (window.onscroll = null);
  })

  return (
    <header className={`p-4 sticky top-0 left-0 w-full z-50 ${ scrollDirection === "down" ? "translate-y-[-56px]" : "translate-y-0"} ${ !isHeaderOnTop ? "header--onScroll" : "bg-transparent" } transition-all duration-500`}>
        <div className="container mx-auto">
            <nav className="flex justify-between items-center">
                <Link to={"/"} className='font-tertiary uppercase dark:text-white'>Pia Juan</Link>
                <div className='dark:text-white text-sm'>hello ☻ </div>
                <ul className='flex items-center gap-6'>
                    <li><Link to={"/works"} className='hyperlink dark:text-white'>works</Link></li>
                    <li><Link to={"/about"} className='hyperlink dark:text-white'>about</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header