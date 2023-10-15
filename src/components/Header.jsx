import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

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
    <header className={`px-2 py-4 md:p-4 fixed top-0 left-0 w-full z-50 ${ scrollDirection === "down" ? "translate-y-[-56px]" : "translate-y-0"} ${ !isHeaderOnTop ? "header--onScroll" : "bg-transparent" } transition-all duration-500`}>
        <div className="container mx-auto">
            <nav className="flex justify-between items-center">
                <Link to={"/"} className='grow font-tertiary uppercase dark:text-white'>Pia Juan</Link>
                <div className='grow-0 inline-flex items-center text-xs dark:text-white'>
                  <TypeAnimation
                    sequence={[
                      "hello!", 
                      1000, 
                      "kamusta?", 
                      1000, 
                      "welcome to my website", 
                      1000, 
                      "glad to see you here!",
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    cursor={false}
                    className='pr-1'
                  />
                   ☻
                </div>
                <ul className='grow flex items-center justify-end gap-6'>
                    <li><Link to={"/works"} className='hyperlink dark:text-white'>works</Link></li>
                    <li><Link to={"/about"} className='hyperlink dark:text-white'>about</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header