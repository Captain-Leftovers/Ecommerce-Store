"use client"

import { Product } from "@/types"
import Image from "next/image"
import IconButton from "./IconButton"
import { Expand } from "lucide-react"


type ProductCardProps = {
    data:Product
  }
export default function ProductCard({data}: ProductCardProps) {


return (
  <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4" >
     {/* TODO Images and Actions */}
     <div className="aspect-square rounded-xl bg-gray-100 relative ">
        <Image alt="Image" src={data?.images?.[0]?.url} fill className="aspect-square object-cover rounded-md" />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
                <IconButton onClick={()=>{}} icon={<Expand size={20} className="text-gray-600" />}  />
            </div>
        </div>
     </div>
  </div>
  )
}