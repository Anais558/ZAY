import { PageHeader } from '@/components/common/PageHeader'

export function AuthPage() {
  return (
    <div className="bg-background pb-16">
      <PageHeader
        title="Connexion & inscription"
        description="Formulaires RHF + Zod, OAuth optionnel côté backend."
      />
      <div className="mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-serif text-xl">Se connecter</h2>
          <p className="mt-2 text-sm text-muted-foreground">Login form (phase 2).</p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-serif text-xl">Créer un compte</h2>
          <p className="mt-2 text-sm text-muted-foreground">Register form (phase 2).</p>
        </section>
      </div>
    </div>
  )
}
