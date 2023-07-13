import React from 'react'

import {motion} from 'framer-motion'
import '../../style/product-card.css'
import { Col } from 'reactstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {  toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import products from '../../assets/data/Products'
const ProductCard = ({item}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName:item.productName,
      price: item.price,
      imgUrl: item.imgUrl
    })
   )
   toast.success('product added successfully')
  }
 



  return (
   
    <Col lg='3' md='4' className='mb-2'>
     
     <div className="product__item" >
        <div className="product__img">
        <Link style={{textDecoration: 'none'}} to={`/shop/${item.id}`} key={item.id}>
            <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt='' />
        </Link>
        </div>
        <div className="p-2 product__info">
        <h3 className="product__name"><Link className='product__name' to={`/shop/${item.id}`}>{item.productName}</Link></h3>
        <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-center
         justify-content-between p-2">
            <span className="price">${item.price}</span>
            <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
                <i className='ri-add-line'></i>
            </motion.span>
        </div>
    </div>
    </Col>
  
  )
}

export default ProductCard