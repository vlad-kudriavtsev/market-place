import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketSelector } from "../../redux/slices/basketSlice";
import { getBasket } from "../../redux/thunks/basketThunk";

const Basket = () => {
    const basket = useSelector(basketSelector);

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getBasket())
    })
    return (
        <div>
            {
               basket.map(({id, url, model, price}) => (
                <div key={id} className="home-page-product">
                  <img className="images" alt={model} key={id} src={url}  />
                  <p >{model} {price}</p>
                </div>
              ))
            }
        </div>
    )
}

export default Basket;