function Products({product=""}) {
    let stockStatus;
    if (product.inStock){
        stockStatus = <p>Stock Available</p>
    } else {
        stockStatus = <p>Stock Unavailable</p>
    }
        return (
            <div>
              <div class="card">
                <h2>{product.id}. {product.name}</h2>
                <p class="category">{product.category}</p>
                <p class="price">{product.price}</p>
                <p class="rating">{product.rating}</p>
                {stockStatus}
                
              </div>
            </div>
        );
}

export default Products
