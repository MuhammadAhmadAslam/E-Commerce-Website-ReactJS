import { useParams } from "react-router-dom"

const SingleCategoryDetail = () => {
       let {productName} = useParams()
       return <h1>{productName}</h1>
}
export default SingleCategoryDetail