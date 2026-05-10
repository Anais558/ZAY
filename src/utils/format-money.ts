const eur = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })

export function formatMoneyEURFromCents(amountCents: number): string {
  return eur.format(amountCents / 100)
}
