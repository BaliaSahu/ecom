import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescriptionBox from '../components/Descriptionbox/DescriptionBox';
import RelatedProducts from '../components/relatedproducts/RelatedProducts';
import './Product.css'

const Product = () => {
  const{collection}=useContext(ShopContext);
  const{productId}=useParams();

  const product=collection.find((e)=> e.id===Number(productId))

  console.log(product.category);
  
  const categ=collection.filter((item,index)=>{
    return item.category===product.category
  })
  console.log(categ)
  return (
    <>
      <ProductDisplay image={product.image} id={product.id} title={product.title} caption={product.caption} new_price={product.new_price} old_price={product.old_price} category={product.category}></ProductDisplay>
      <DescriptionBox></DescriptionBox>
      <div className='r'>
        <h2>Related Products</h2>
        <hr />
      </div>
      <div className='cate'>
      {
        categ.map((cate,index)=>{
          return(
            <RelatedProducts image={cate.image} title={cate.title} id={cate.id} old_price={cate.old_price} new_price={cate.new_price}></RelatedProducts>
          )
        })
      }
      </div>
    </>
  )
}

export default Product