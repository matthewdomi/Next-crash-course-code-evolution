import {useRouter} from "next/router";


function ProductDetail() {
    const router = useRouter;
    const productid = router.query.productid
    return(
        <h2>product details about product {productid}</h2>
    )
    
}
export default ProductDetail;