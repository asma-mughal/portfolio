import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useNavigate  } from 'react-router-dom';
import { Link,animateScroll as scroll} from 'react-scroll'
const Navbar = ({color, setColor,click,setClick}) => {
  const navigate = useNavigate();
    const handleClick = () => setClick(!click)
    const handleClick2 = (i) =>{
    if(i==='gallery') {
      navigate("/gallery")
    }
    }
    const changeColor = () =>{
        if(window.scrollY>=90){
        setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "services",
        },
        {
          id: 3,
          link: "projects",
        },
        {
          id: 4,
          link: "gallery",
        },
        {
          id: 5,
          link: "about",
        },
        {
          id: 6,
          link: "contact",
        },
      ];
  return (
    <div className={color? 'header header-bg' : 'header'}>
            <nav className='navbar font-poppins'>
            <div>
            <h1 className={`${!color && 'lg:text-white'}
             font-bold tracking-widest text-3xl text-black `}>PORTFOLIO</h1>
          </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={25} style={{ color: 'black' }} />)
                        : (<FaBars size={25} style={{ color: 'black' }} />)}

                </div>
                <ul className={click ? "nav-menu active"  : " nav-menu"}>
                    
                    {links.map((i)=>
       
                    <li
                    className={`p-4  ${color? 'text-gray-400' : 'text-white'}
                    ${color? 'hover:text-black' : 'hover:font-bold'}
                      font-semibold  uppercase text-sm duration-200 cursor-pointer`}>
                  <Link  
                 onClick={()=> {setClick(!click)
                  handleClick2(i.link)
                }}
                  style={{
                    color : color && '#9ca3af'
                  }}
                  activeClass='active'
                  smooth spy to={i.link}>
                    {i.link}
                    </Link>
                    </li>
                    )}
                  
                </ul>
            </nav>
        </div>
  )
}

export default Navbar
