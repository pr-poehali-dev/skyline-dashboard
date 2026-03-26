import type { ReactNode } from "react"

export interface Product {
  name: string
  price: string
  image: string
  description: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  products?: Product[]
}

export interface SectionProps extends Section {
  isActive: boolean
}