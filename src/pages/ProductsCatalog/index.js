import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import ProductType from "../../components/ProductType";
import { productsSelector } from "../../redux/slices/productsSlice";
import { getProducts } from "../../redux/thunks/productsThunk";

const ProductsCatalog = () => {
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const firstProductOfProductType = [];
  for(let key in products) {
    firstProductOfProductType.push(products[key][0])
  }
  console.log(firstProductOfProductType)
  

  return (
    <>
      {
        firstProductOfProductType.map(({id, productType, url, model, price}) => (
          <ProductType key={id} id={id} productType={productType} url={url} model={model} price={price} />
        ))
      }
    </>
      
  )
}

export default ProductsCatalog