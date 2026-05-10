export type ProductId = string

export type MoneyCents = {
  amountCents: number
  currency: 'EUR'
}

export type Product = {
  id: ProductId
  slug: string
  title: string
  subtitle?: string
  description?: string
  price: MoneyCents
  compareAtPrice?: MoneyCents
  images: { url: string; alt: string }[]
  isAvailable: boolean
  tags: string[]
}

export type ProductListItem = Pick<Product, 'id' | 'slug' | 'title' | 'price' | 'images' | 'tags'> & {
  badge?: 'new' | 'sale' | 'bestseller'
}
