import type { ProductId } from './product'

export type CartLineId = string

export type CartLine = {
  id: CartLineId
  productId: ProductId
  sku: string
  title: string
  quantity: number
  unitPriceCents: number
  currency: 'EUR'
  imageUrl?: string
}
