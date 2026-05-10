import { PageHeader } from '@/components/common/PageHeader'

export function CataloguePage() {
  return (
    <div className="bg-background pb-16">
      <PageHeader
        title="Catalogue"
        description="Listing produits, filtres & tri — implémentation complète phase 1 (grille + ProductCard)."
      />
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <p className="col-span-full rounded-lg border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
            Grille catalogue branchée sur TanStack Query + services API à la phase 1 suite.
          </p>
        </div>
      </section>
    </div>
  )
}
