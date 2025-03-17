"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GamePopupProps {
  title: string
  description: string
  image: string
}

export default function GamePopup({ title, description, image }: GamePopupProps) {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h3 className="font-semibold text-lg">{title}</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="h-6 w-6 text-gray-500 hover:text-gray-900"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="relative rounded-lg overflow-hidden mb-4">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full object-cover" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/20" />
            <Button className="z-10 bg-blue-600 text-white hover:bg-blue-700 font-medium px-6">Play Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

