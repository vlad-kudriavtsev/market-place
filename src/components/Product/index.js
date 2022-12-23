
const Product = ({id, url, model, productType, price}) => {
    return (
        <div key={id} className="home-page-product">
          <img className="images" alt={model} id={id} src={url}  />
          <p >{model} {price}</p>
        </div>
    )
}

export default Product;