import { useParams } from 'react-router-dom'
import { PageHeader } from '@/components/common/PageHeader'

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="bg-background pb-16">
      <PageHeader
        title={slug ? `Produit : ${slug}` : 'Produit'}
        description="Fiche produit : galerie swipe, variations, quantité, ajout panier & SEO dynamique."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div className="aspect-[3/4] rounded-lg border border-border bg-muted/30" aria-hidden="true" />
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Référence : {slug}</p>
          <p className="text-foreground">
            Conteneur PDP prêt pour la galerie, le stepper quantité & le CTA conversion.
          </p>
        </div>
      </section>
    </div>
  )
}
