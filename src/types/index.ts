import type { ReactNode } from "react"

export interface Product {
  name: string
  price: string
  image: string
  description: string
}

export interface Review {
  name: string
  city: string
  text: string
  rating: number
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  vkContact?: string
  products?: Product[]
  reviews?: Review[]
}

export interface SectionProps extends Section {
  isActive: boolean
}