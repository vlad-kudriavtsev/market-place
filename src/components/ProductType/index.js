import { Link } from "react-router-dom";

const ProductType = ({id, url, model, productType, price}) => {
    return (
        <div key={id} className="home-page-product">
          <img className="images" alt={model} id={id} src={url}  />
          <p >{model} {price}</p>
          <Link to={`/${productType}`}>{productType}</Link>
        </div>
    )
}

export default ProductType;