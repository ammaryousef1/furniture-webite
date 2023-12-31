import React , { useRef , useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Container , Row } from 'reactstrap'
import {motion} from 'framer-motion'
import userIcon from '../../assets/images/user-icon.png'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'


const nav__links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    }
]


const Header = () => {

    const navigate = useNavigate()
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const  [user , setUser] = useState(false)


    const stickyHeaderFunc = () =>{
        window.addEventListener('scroll' , ()=> {
      
                    headerRef.current.classList.add('sticky__header')
               
        })
    }
    
    useEffect(() => {
     return   stickyHeaderFunc()

      
    })

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')


    const navigateToCart  = ()=>{
        navigate('/cart')
    }

       
      
    
        

  return (
    <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__wrapper">
                    <div className='logo'>
                            <h1>Multimart</h1>
                     </div>
                    
                    
                    <div className='navigation' ref={menuRef} onClick={menuToggle} >
                        <ul className="menu">
                            {  nav__links.map((item , index) => (
                                    <li className="nav__item" key={index}>
                                    <NavLink
                                      className={(navClass) => 
                                      navClass.isActive ? "nav__active navLink" : 'navLink'
                                    }
                                      to={item.path}
                                      >{item.display}
                                     </NavLink>
                                </li>
                                )) 
                            }
                         </ul>
                    </div>

                    <div className='nav__icons'>

                      
                        <span className="cart__icon" onClick={navigateToCart}>
                            <i className='ri-shopping-bag-line'></i>
                            <span className="badge"  >{totalQuantity}</span>
                        </span>

                     
                       
                         
                     
                      
                       <div className="mobile__menu">
                        <span onClick={menuToggle}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                    </div>
                   
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header