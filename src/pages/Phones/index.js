import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/ProductType";
import { phonesSelector } from "../../redux/slices/phonesSlice";
import { getPhones } from "../../redux/thunks/phonesThunk";

const Phones = () => {
    const dispatch = useDispatch();
    const phones = useSelector(phonesSelector)

    useEffect(() => {
        dispatch(getPhones())
    }, [])


    return (
        <div>
            {
                phones.map(({id, model, url, price}) => (
                    <Product key={id} model={model} url={url} price={price} />
                ))
            }
        </div>
    )
}

export default Phones;