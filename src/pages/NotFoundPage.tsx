import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { paths } from '@/routes/paths'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="font-serif text-4xl text-foreground">404</p>
      <p className="max-w-md text-muted-foreground">
        La page demandée n’existe pas ou a été déplacée.
      </p>
      <Button asChild>
        <Link to={paths.home}>Retour à l’accueil</Link>
      </Button>
    </div>
  )
}
