import { PageHeader } from '@/components/common/PageHeader'

export function SearchResultsPage() {
  return (
    <div className="bg-background pb-16">
      <PageHeader
        title="Recherche"
        description="Résultats avec query TanStack, tri pertinence & facettes (phase 1). "
      />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-sm text-muted-foreground">État vide / skeleton branchés ensuite.</p>
      </div>
    </div>
  )
}
