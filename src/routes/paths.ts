/**
 * Single source of truth des chemins URL (typés pour le routeur + Link).
 * Les slugs dynamiques sont exprimés en factory pour éviter les chaînes magiques.
 */
export const paths = {
  home: '/',
  catalogue: '/catalogue',
  product: (slug: string) => `/produit/${slug}` as const,
  search: '/recherche',
  about: '/a-propos',
  auth: '/connexion',
  account: '/compte',
  wishlist: '/compte/favoris',
  orders: '/compte/commandes',
  cart: '/panier',
  checkout: '/checkout',
  orderConfirmation: '/commande/confirmation',
  tracking: '/suivi-livraison',
  legalTerms: '/legal/cgv',
  legalReturns: '/legal/retours',
  admin: {
    root: '/admin',
    products: '/admin/produits',
    orders: '/admin/commandes',
    promos: '/admin/promos',
    customers: '/admin/clientes',
  },
} as const

export type AppPath = (typeof paths)[keyof Omit<typeof paths, 'product' | 'admin'>] | ReturnType<typeof paths.product>
export type AdminPath = (typeof paths.admin)[keyof typeof paths.admin]
