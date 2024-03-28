
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_products.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../Redux/Product/actions';
import { addCartItem } from '../../Redux/Cart/cartSlice';
import { Link } from 'react-router-dom';
const Products=()=>{

    let productData= useSelector(state=>state.productReducer.products);
    
    let cartData=useSelector(state=>state.cartReducer)
    console.log(cartData,'ooooooooooooo');
    let dispatch= useDispatch();
    useEffect(()=>{

        console.log("use effect called");
         dispatch(getProducts());

    },[] )

    const addToCart= (product)=>{


      product={...product,quantity:1};
        dispatch(addCartItem(product));
    }

    const Sortedproducts = [...productData].sort((a,b) => a.product_name.localeCompare(b.product_name))
    // console.log(Sortedproducts,'Sortedproducts')
    return(
 
        <div className='product-container'>
    {Sortedproducts.map((eachProduct,index)=>{

            
return(
          <div className='mx-5 p-3 product-card'>
<Link to="/productdetails" state={{product:eachProduct}} >
  
            <div className='product-image-container'>
                 <img src={require('../../assets/images/shop/'+  eachProduct.product_img)}/>


            </div>

 </Link>            
            

            <div className='product-info'>
            <h5>
                   <Link to="/productdetails" state={{product:eachProduct}} >{eachProduct.product_name}</Link>
                 </h5>
 <p className='product-price'>${eachProduct.price}</p>
              <div className='product-rating'>
                  <FontAwesomeIcon  icon='fa fa-star' className='rating' />
                  <FontAwesomeIcon  icon='fa fa-star' className='rating' />
                  <FontAwesomeIcon  icon='fa fa-star' className='rating' />
               </div>
             <div className='my-3'onClick={()=>{addToCart(eachProduct);}}>
              <div className='cart-button'>
                    <div className='cart-icon-container'>
               <FontAwesomeIcon icon="fa fa-shopping-cart" className="mx-4 cart-icon" />
                </div>
                <div className='cart-text-container mx-3'>
                 <p className=''>Add to Cart </p>
                </div>
              </div>
               </div>

            </div>



          </div>)
   
       })}  
        </div>


    )



}

export default Products;