import { PageHeader } from '@/components/common/PageHeader'

export function AboutPage() {
  return (
    <div className="bg-background pb-16">
      <PageHeader
        title="La maison ZAY"
        description="Storytelling éditorial, valeurs, atelier — contenu riche et responsive."
      />
      <article className="mx-auto max-w-3xl space-y-4 px-4 text-base leading-relaxed text-muted-foreground md:px-6">
        <p>
          Contenu éditorial « La maison » : matière noble, silhouettes, ateliers — à enrichir avec médias
          & timeline (phase contenus).
        </p>
      </article>
    </div>
  )
}
