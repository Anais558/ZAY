import { PageHeader } from '@/components/common/PageHeader'

type LegalVariant = 'cgv' | 'returns'

const copy: Record<
  LegalVariant,
  { title: string; description: string }
> = {
  cgv: {
    title: 'Conditions générales de vente',
    description: 'Cadre juridique & livraison — texte officiel à injecter côté CMS / legal.',
  },
  returns: {
    title: 'Politique de retours',
    description: 'Délais, frais, étiquettes — alignement avec logistique réelle.',
  },
}

export function LegalPage({ variant }: { variant: LegalVariant }) {
  const meta = copy[variant]
  return (
    <div className="bg-background pb-16">
      <PageHeader title={meta.title} description={meta.description} />
      <div className="mx-auto max-w-3xl space-y-4 px-4 text-sm leading-relaxed text-muted-foreground md:px-6">
        <p>
          Structure page légale prête (titres, ancres, conformité RGPD) : branchement contenu final et
          liens footer.
        </p>
      </div>
    </div>
  )
}
