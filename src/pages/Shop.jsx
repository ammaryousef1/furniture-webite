import React, { useState } from 'react'
import Helmet from '../Helmet/Helmet'
import CommonSection from '../components/Ul/CommonSection'
import { Container , Row , Col } from 'reactstrap'
import '../style/shop.css'
import products from '../assets/data/Products'
import ProductsList from '../components/Ul/ProductsList'
const Shop = () => {
  const [productData  , setProductData] = useState(products)

  const handleFilter = e => {
    const filterValue = e.target.value;
    if (filterValue === 'sofa') {
      const filteredProducts = products.filter(item => item.category === 'sofa');
      setProductData(filteredProducts);
    }

    if (filterValue === 'mobile') {
      const filteredProducts = products.filter(item => item.category === 'mobile');
      setProductData(filteredProducts);
    }

    if (filterValue === 'chair') {
      const filteredProducts = products.filter(item => item.category === 'chair');
      setProductData(filteredProducts);
    }

    if (filterValue === 'watch') {
      const filteredProducts = products.filter(item => item.category === 'watch');
      setProductData(filteredProducts);
    }

    if (filterValue === 'wireless') {
      const filteredProducts = products.filter(item => item.category === 'wireless');
      setProductData(filteredProducts);
    }
  };

  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.
      toLowerCase().includes(searchTerm.toLowerCase())
      )
      setProductData(searchedProducts)
  }

  return (
    <Helmet title='Shop' >
      <CommonSection title='Products' />
      <section>
        <Container>
          <Row>
          <Col lg='3' md='6'>
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>Fillter By Categoty</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">wireless</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='6' className='text-end'>
          <div className="filter__widget">
              <select>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg='6' md='12'>
            <div  className="search__box">
              <input
               type='text'
               placeholder='Search....'
               onChange={handleSearch} />
              <span>
                <i className='ri-search-line'></i>
              </span>
            </div>
          </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productData.length === 0? <h1 className='text-center fs-4'>No products are found!</h1> : 
              <ProductsList data={productData} />
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop

