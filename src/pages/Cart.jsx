import React from 'react'
import '../style/cart.css'
import Helmet from '../Helmet/Helmet'
import CommonSection from '../components/Ul/CommonSection'
import { Container , Row , Col } from 'reactstrap'
import {motion} from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state=> state.cart.totalAmount)
  return (
    <Helmet title="Cart" >
      <CommonSection title='Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg="9" >
              { cartItems.length===0 ? (
                 <h2 className='fs-4 text-center'>No item added to the cart </h2>) :
                (
                  <table className='table bordered' >
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                 {
                  cartItems.map((item , index)=> (
                  <Tr item={item} key={index} />
                  ))
                 }
                  </tbody>
  
                </table>
                )
              }
            </Col>
            <Col lg="3">
              <div className='d-flex align-items-center justify-content-between'>
                <h6>Subtotal</h6>
                <span className='fs-4 fw-bold'>${totalAmount}</span>
              </div>
              <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
              <div>
                <button style={{display: 'block'}} className="buy__btn mb-3 w-100">
                  <Link  style={{color : 'white', textDecoration: 'none' }} to='/shop'>Continue Shoping </Link>
                  </button>
                  <button style={{display: 'block' , color : 'white'}} className="buy__btn w-100">
                  <Link style={{color : 'white', textDecoration: 'none'}} to='/checkout'>Checkout</Link>
                  </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({item , index}) => {
  const dispatch = useDispatch()

  const deleteProduct =()=> {
    dispatch(cartActions.deleteItem(item.id))
  }
  return   <tr key={index}>
  <td>
  <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt='' />
  </td>
  <td>{item.productName}</td>
  <td>${item.price} </td>
  <td>{item.quantity}px</td>
  <td>
    <motion.i
    whileTap={{ scale: 1.2 }}
    className='ri-delete-bin-line'
    onClick={deleteProduct}
       ></motion.i>
  </td>
</tr>
}

export default Cart