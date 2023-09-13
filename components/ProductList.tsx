import { Product } from '@/types'
import NoResults from './ui/NoResults'

type ProductListProps = {
	title: string
	items: Product[]
}
export default function ProductList({ items, title }: ProductListProps) {
	return (
		<div className="space-y-4">
			<h3 className='font-bold text-3xl' >{title}</h3>
            {items.length === 0 && <NoResults />}
		</div>
	)
}
