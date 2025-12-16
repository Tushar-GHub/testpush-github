import useProducts from '../hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, clearCart, removeItem } from '../redux/cartSlice';

function UseEffectProduct(){
    const cartSliceData = useSelector((state) => state.cart);
    console.log(cartSliceData, "cartSliceData");

    const [products, setProducts] = useProducts();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="product-grid">

          {products.map((item, index) => {
            return (
              <div key={item.id} className="product-card">
                <img src={item.images[0]} alt="Product Image" className="product-img" />
                <h3 className="product-title">{item.title}</h3>
                <p className="product-category">Category: {item.category}</p>
                <p className="product-price">${item.price}</p>
                <p className="product-description">{item.description}</p>
                <p className="product-rating">⭐ {item.rating} / 5</p>
                {/* <button onClick={() => navigate(`/list-product/${item.id}`, { state: item })} type="button">View Product</button> */}
                <button onClick={()=>{dispatch(addItem(item))}}>Add To Cart</button>
              </div>
            )
          })}
          <div>

          {cartSliceData.items.map((cartItem) => {
            return (
              <div>
                <p style={{color: "black"}}>{cartItem.title} ${cartItem.price}</p> 
                <button onClick={() => {dispatch(removeItem(cartItem))}}>RemoveItem</button>
              </div>
            )
          })}
            <button onClick={() => {dispatch(clearCart())}}>Clear Cart</button>
          </div>
        </div>
    );
}


export default UseEffectProduct
