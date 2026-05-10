import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PageHeaderProps = {
  title: string
  description?: ReactNode
  className?: string
}

/**
 * En-tête de page cohérent (SEO visuel + hiérarchie) — utilisé sur les vues internes.
 */
export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <header className={cn('mx-auto w-full max-w-6xl px-4 pb-8 pt-10 md:px-6', className)}>
      <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">{title}</h1>
      {description ? (
        <div className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">{description}</div>
      ) : null}
    </header>
  )
}
