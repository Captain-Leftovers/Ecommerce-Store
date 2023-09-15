"use client"

import Image from "next/image"
import { Tab } from "@headlessui/react"

import { Image as ImageType } from "@/types"
import GalleryTab from "./GalleryTab"


type GalleryProps = {
    images: ImageType[]
  }
export default function Gallery({images}: GalleryProps) {


return (
    <Tab.Group as="div" className="flex flex-col-reverse" >
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"></div>
        <Tab.List className="grid grid-cols-4 gap-6">
            {images.map((image) => (
                <GalleryTab key={image.id} image={image} />
            ))}
        </Tab.List>
    </Tab.Group>
  )
}
