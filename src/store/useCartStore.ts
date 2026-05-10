import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartLine } from '@/types/cart'
import { generateId } from '@/utils/id'

type CartState = {
  lines: CartLine[]
  addItem: (input: Omit<CartLine, 'id'> & { id?: string }) => void
  updateQuantity: (lineId: string, quantity: number) => void
  removeLine: (lineId: string) => void
  clear: () => void
}

/**
 * Panier client : persistance localStorage pour UX immédiate ; réconciliation serveur à brancher post-auth (merge).
 */
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      addItem: (input) => {
        const id = input.id ?? generateId('line')
        const line: CartLine = { ...input, id }
        const existing = get().lines.find(
          (l) => l.productId === line.productId && l.sku === line.sku,
        )
        if (existing) {
          set({
            lines: get().lines.map((l) =>
              l.id === existing.id ? { ...l, quantity: l.quantity + line.quantity } : l,
            ),
          })
          return
        }
        set({ lines: [...get().lines, line] })
      },
      updateQuantity: (lineId, quantity) => {
        if (quantity <= 0) {
          get().removeLine(lineId)
          return
        }
        set({
          lines: get().lines.map((l) => (l.id === lineId ? { ...l, quantity } : l)),
        })
      },
      removeLine: (lineId) => {
        set({ lines: get().lines.filter((l) => l.id !== lineId) })
      },
      clear: () => set({ lines: [] }),
    }),
    { name: 'zay:cart:v1' },
  ),
)
