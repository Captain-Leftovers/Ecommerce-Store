import Container from '@/components/ui/Container'

import Billboard from '@/components/Billboard'
import getBillboard from '@/actions/getBillboard'
import getProducts from '@/actions/getProducts'
import ProductList from '@/components/ProductList'

export const revalidate = 0

export default async function HomePage() {
	const billboard = await getBillboard('357d81c8-7510-4af6-8718-f4e6c1eff770')
	const products = await getProducts({ isFeatured: true })

	return (
		<Container>
			<div className="pb-10 space-y-10 ">
				<Billboard data={billboard} />
			<div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8 ">
				<ProductList title="Featured Products" items={products} />
			</div>
			</div>
		</Container>
	)
}
