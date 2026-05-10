import { Link } from 'react-router-dom'
import { PageHeader } from '@/components/common/PageHeader'
import { paths } from '@/routes/paths'

export function AccountDashboardPage() {
  return (
    <div className="bg-background pb-16">
      <PageHeader title="Mon compte" description="Vue d’ensemble commandes, adresses, préférences." />
      <div className="mx-auto grid max-w-5xl gap-4 px-4 md:grid-cols-2 md:px-6">
        <Link
          to={paths.orders}
          className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:bg-muted/40"
        >
          <h2 className="font-serif text-lg">Commandes</h2>
          <p className="mt-1 text-sm text-muted-foreground">Historique & suivi</p>
        </Link>
        <Link
          to={paths.wishlist}
          className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:bg-muted/40"
        >
          <h2 className="font-serif text-lg">Favoris</h2>
          <p className="mt-1 text-sm text-muted-foreground">Liste d’envies synchronisée</p>
        </Link>
      </div>
    </div>
  )
}
