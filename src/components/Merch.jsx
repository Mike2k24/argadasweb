import Data from '../data.json'
export default function Merch({products, basket, setBasket}){

    function addProduct(product){
        let newProduct = {
            name: product.productName,
            price: product.price,
            quantity: 1
        }
        setBasket([...basket, newProduct])
    }

    return(
        <div>
            {products.map((product, index) => {
                return(
                    <div key={index}>
                        <img src="" alt="Product Image" />
                        <p>{product.name}</p>
                        <p>Price: {product.price}</p>
                        <button onClick={() => addProduct(product)}>Add to Baske</button>
                    </div>
                )
            })}
        </div>
    )
}