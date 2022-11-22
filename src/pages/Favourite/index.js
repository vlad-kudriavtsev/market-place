import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favouritesSelector } from "../../redux/slices/favouriteSlice";
import { getFavourites } from "../../redux/thunks/favouritesThunks";

const Favourite = () => {
    const favourites = useSelector(favouritesSelector);

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getFavourites())
    })
    return (
        <div>
            {
               favourites.map(({id, url, model, price}) => (
                <div key={id} className="home-page-product">
                  <img className="images" alt={model} key={id} src={url}  />
                  <p >{model} {price}</p>
                </div>
              ))
            }
        </div>
    )
}

export default Favourite;