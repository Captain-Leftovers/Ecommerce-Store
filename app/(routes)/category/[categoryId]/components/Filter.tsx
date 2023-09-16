'use client'

import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { Color, Size } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'

import qs from 'query-string'

type FilterProps = {
	valueKey: string
	name: string
	data: (Size | Color)[]
}
export default function Filter({ data, name, valueKey }: FilterProps) {
	const searchParams = useSearchParams()
	const router = useRouter()
	const selectedValue = searchParams.get(valueKey)

	const onClick = (id: string) => {
		const current = qs.parse(searchParams.toString())
		const query = {
			...current,
			[valueKey]: id,
		}

		if (current[valueKey] === id) {
			query[valueKey] = null
		}

		const url = qs.stringifyUrl(
			{
				url: window.location.href,
				query,
			},
			{ skipNull: true }
		)

		router.push(url)
	}

	const sortedData =
		valueKey === 'sizeId'
			? data.sort((a, b) => {
					if (a.value === 'S') {
						return -1
					} else if (b.value === 'S') {
						return 1
					} else if (a.value === 'M') {
						return -1
					} else if (b.value === 'M') {
						return 1
					} else {
						return 0
					}
			  })
			: data

	return (
		<div className="mb-8 ">
			<h3 className="text-lg font-semibold">{name}</h3>
			<hr className="my-4" />
			<div className="flex flex-wrap gap-2">
				{sortedData.map((filter) => (
					<div key={filter.id} className="flex items-center">
						<Button
							className={cn(
								'rouded.md text-small text-gray-800 p-2 bg-white border border-gray-300',
								selectedValue === filter.id &&
									'bg-black text-white'
							)}
							onClick={() => onClick(filter.id)}
						>
							{filter.name}
						</Button>
					</div>
				))}
			</div>
		</div>
	)
}
