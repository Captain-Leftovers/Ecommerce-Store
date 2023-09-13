import getProduct from "@/actions/getProduct"
import getProducts from "@/actions/getProducts"
import Container from "@/components/ui/Container"

 


type ProductPageProps = {
    params: {
        productId: string
    }
  }
export default async function ProductPage({params}: ProductPageProps) {

    const product = await getProduct(params?.productId)

    const suggestedProducts = await getProducts({
        categoyId: product?.category?.id,
    })

return (
  <div className="bg-white " >
    <Container>
        <div className="px-4 pyu-10 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                {/*Gallery here */}
                <div>Gallery</div>
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 ">
                    {/* Info */}
                    Info
                </div>
            </div>
            <hr className="my-10 border-green-500"/>
        </div>
    </Container>
  </div>
  )
}