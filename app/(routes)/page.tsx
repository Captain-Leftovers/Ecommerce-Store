import Container from '@/components/ui/Container'

import Billboard from '@/components/Billboard'
import getBillboard from '@/actions/getBillboard'
import getProducts from '@/actions/getProducts'
import ProductList from '@/components/ProductList'

export const revalidate = 0

export default async function HomePage() {
	const billboard = await getBillboard('1de051ad-d06e-493c-9eb4-39a14e2c0f35')
	const products = await getProducts({ isFeatured: true })

	return (
		<Container>
			<div className="space-y-10 pb-10 ">
				<Billboard data={billboard} />
			<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 ">
				<ProductList title="Featured Products" items={products} />
			</div>
			</div>
		</Container>
	)
}
