import React, { useEffect, useRef, useState } from 'react'
import {Container , Row , Col } from 'reactstrap'
import { useParams } from 'react-router-dom';
import products from '../assets/data/Products';
import Helmet from '../Helmet/Helmet';
import CommonSection from '../components/Ul/CommonSection';
import '../style/product-details.css'
import {motion} from 'framer-motion'
import ProductsList from '../components/Ul/ProductsList'
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice'; 
import { toast } from 'react-toastify';
const ProductDetails = () => {
  const [tab, setTab] = useState('desc')
  const [rat , setrat] = useState()
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch()
  const {id} = useParams()
  const product = products.find((item) => item.id === id)
  const relatedProducts = products.filter(item => item.category === product.category)
  
  const submitHandler =(e)=>{
    e.preventDefault();

    const reviewUserName = reviewUser.current.value


    const reviewObj = {
      userName: reviewUserName,
      text: reviewMsg,
      rating:rat
    }
    console.log(reviewObj)
    toast.success('Review submitted')
  }

  const addToCart = ()=>{
    dispatch(cartActions.addItem({
      id: product.id,
      image:product.imgUrl,
      productName: product.productName,
      price: product.price
    })
   )
   toast.success('Product add successfully')
  }

  useEffect(() => {
    window.scrollTo(0,0)
  },[product])

  return (
    <Helmet title={product.productName}>
      <CommonSection title={product.productName}/>
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg={6}>
      <img src={product.imgUrl} alt='' />
         
            </Col>
            <Col lg={6}>
              <div className="product__details">
                <h2>{product.productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span style={{ color: "coral"}} onClick={() => setrat(1)} >
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span style={{ color: "coral"}}  >
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span style={{ color: "coral"}}  >
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span style={{ color: "coral"}}  >
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span style={{ color: "coral"}}  >
                      <i className='ri-star-s-fill'></i>
                    </span>
                  </div>
                  <p className='product__rating'>
                    (<span className='product__rating'>{product.avgRating}</span> rating)</p>
                </div>
                <div className='d-flex align-items-center gap-5'>
                <span className='product__price'>${product.price}</span>
                <span>Category: {product.category}</span>
                </div> . 
                <p>{product.shortDesc}</p>
                <motion.button whileTap={{ scale: 1.1 }}
                 className="buy__btn"
                 onClick={addToCart}
                 >Add to Cart </motion.button>
              </div>
            </Col> 
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg={12}>
            <div className="tab__wrapper d-flex align-items-center gap-5">

              <h6 className={`${tab==='desc' ? 'active__tab' : ''}`}
              onClick={() => setTab('desc')}
              >Description</h6>

              <h6 className={`${tab==='rev' ? 'active__tab' : ''}`}
              onClick={() => setTab('rev')}
              >Reviews ({product.reviews.length})</h6>
            </div>
            {
              tab==='desc' ?
              (
               <div className='tab__content mt-5'>
                <p>{product.description}</p>
              </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {
                        product.reviews?.map((item , index) => (
                          <li key={index} className='mb-4'>
                            <h6>Jhon Doe</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul>

                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form onSubmit={submitHandler} >
                        <div className="form__group">
                          <input type="text" placeholder='Enter name'
                           ref={reviewUser}
                           required
                          />
                        </div>

                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span  whileTap={{scale: 1.2}} onClick={() => setrat(1)}>
                            1<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span  whileTap={{scale: 1.2}} onClick={() => setrat(2)}>
                            2<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span  whileTap={{scale: 1.2}} onClick={() => setrat(3)}>
                            3<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span  whileTap={{scale: 1.2}} onClick={() => setrat(4)}>
                            4<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span  whileTap={{scale: 1.2}} onClick={() => setrat(5)}>
                            5<i className='ri-star-s-fill'></i>
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea
                          ref={reviewMsg}
                          rows={4}
                          type="text"
                          placeholder='Review Message...'
                          required
                          />
                        </div>
                        <motion.button 
                        type='submit'
                         className="buy__btn"
                         >Submit</motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg='12'className='mt-5' >
              <h2 className="related__title">You might also like</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails

