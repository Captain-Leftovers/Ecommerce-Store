import { Product } from '@/types'
import qs from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

type Query = {
	categoyId?: string
	colorId?: string
	sizeId?: string
	isFeatured?: boolean
}


export default async function getProducts(query:Query): Promise<Product[]> {
	const url = qs.stringifyUrl({
		url: URL,
		query: {
			colorId: query.colorId,
			sizeId: query.sizeId,
			categoryId: query.categoyId,
			isFeatured: query.isFeatured,
		}
	})

	const res = await fetch(url, { cache: 'no-store' })

	return res.json()
}
