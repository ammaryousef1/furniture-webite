import React , { useState , useEffect } from 'react'
import Helmet from '../Helmet/Helmet'
import { Container , Row , Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../style/Home.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import Services from '../services/services'
import ProductsList from '../components/Ul/ProductsList'
import products from '../assets/data/Products'
import Clock from '../components/Ul/Clock'
import counterImg from '../assets/images/counter-timer-img.png'
const Home = () => {
  const [trandingProducts , setTrandingProducts] = useState([])
  const [bestSalesProducts , setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear();
  
  useEffect(() => {
    const filterdTrendingProducts = products.filter(
      (item) => item.category === 'chair')

      const filterdBestSalesProducts = products.filter(
        (item) => item.category === 'sofa')
        
      const filterdMobileProducts = products.filter(
       (item) => item.category === 'mobile')

     const filterdWirelessProducts = products.filter(
      (item) => item.category === 'wireless')

     const filterdPopularProducts = products.filter(
        (item) => item.category === 'watch')
  
      setTrandingProducts(filterdTrendingProducts)
      setBestSalesProducts(filterdBestSalesProducts)
      setMobileProducts(filterdMobileProducts)
      setWirelessProducts(filterdWirelessProducts)
      setPopularProducts(filterdPopularProducts)
  } , [])
  return (
    <Helmet title={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6' > 
              <div className='hero__content'>
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolores, qui nisi quae quia minima maxime, quo laudantium ad deleniti doloremque nemo rerum modi recusandae velit, architecto dicta facere pariatur.</p>
                <motion.button whileTap={{ scale: 1.2}} className="buy__btn"><Link className="buy__btn" to='shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg="6" md='6'>
              <div className="hero__img">
                <img src={heroImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trandingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
        <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Row className='Row'>
        <Col lg='6' md='12' className='count__down-col'>
          <div className="clock__top-content">
            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
          <Clock duration={2 * 24 * 60 * 60 * 1000}  />
          <motion.button whileTap={{ scale: 1.2}} className=" store__btn">
            <Link className='store__btn ' to="/shop">Visit Store</Link>
          </motion.button>
          </div>
        </Col>
          <Col lg='6' md='12' className='text-end counter__img'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </section>

      <scetion className="new__arrivals">
        <Container>
          <Row>
          <Col lg='12' className='text-center mb-5'>
              <h2 className="section__title">New Arrivale</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </scetion>

      <section className="popular__category">
        <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
              <h2 className="section__title">Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home