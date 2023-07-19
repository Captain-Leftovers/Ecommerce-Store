'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type MainNavProps = {
	data: any
}
export default function MainNav({ data }: MainNavProps) {
	const pathname = usePathname()
	const routes = data.map((route) => ({
		href: `/category/${route.id}`,
		label: route.name,
		active: pathname === `/category/${route.id}`,
	}))

	return (
		<nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {routes.map((route) => (
                <Link href={route.href} key={route.href} className={cn()} >
                    {route.label}
                </Link>
            ))}
		</nav>
	)
}