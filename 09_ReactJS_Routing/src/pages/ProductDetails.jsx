import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams()
  return (
    <div>
      <h1>{params.productID} Details</h1>
    </div>
  )
}
export default ProductDetails;