import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/slices/basketSlice";
import { addFavourite } from "../../redux/slices/favouriteSlice";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()


  
  useEffect(() => {
    fetch('http://localhost:3000/homepage')
      .then(res => res.json())
      .then(res => setProducts(res))
  }, [])

  const handleFavourite = ({id, url, model, catalog, price}) => {
    const prod = {
      id,
      url,
      model,
      catalog,
      price
    }


    fetch('http://localhost:3000/favourites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prod)
    })
      .then(res => res.json())
      .then(res => {
            dispatch(addFavourite(res))
      })
  }

  const handleBasket = ({id, url, model, catalog, price}) => {
    const prod = {
      id,
      url,
      model,
      catalog,
      price
    }


    fetch('http://localhost:3000/basket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prod)
    })
      .then(res => res.json())
      .then(res => {
            dispatch(addBasket(res))
      })
  }

  return (
    <>
      {
      products.map(({id, url, model, catalog, price}) => (
        <div key={id} className="home-page-product">
          <img className="images" alt={model} key={id} src={url}  />
          <p >{model} {price}</p>
          <button onClick={() => handleFavourite({id, url, model, catalog, price})}>Добавить в избранное</button>
          <button onClick={() => handleBasket({id, url, model, catalog, price})}>Добавить в корзину</button>
        </div>
      ))
      }
    </>
      
  )
}

export default HomePage