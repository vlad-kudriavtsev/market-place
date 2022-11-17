import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch('http://localhost:3000/homepage')
      .then(res => res.json())
      .then(res => setProducts(res))
  }, [])

  const handleCatalog = (catalog) => {
    navigate(catalog)
  }


    return (
      <>
        {
        products.map(({id, url, model, catalog}) => (
          <div key={id} className="home-page-product">
            <img className="images" alt={model} key={id} src={url}  />
            <p >{model}</p>
            <p onClick={() => handleCatalog(catalog)}>{catalog}</p>
          </div>
        ))
        }
      </>
        
    )
}

export default HomePage