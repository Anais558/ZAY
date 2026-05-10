import { Outlet } from 'react-router-dom'

/**
 * Layout racine : enveloppe chaque page (Header / Footer / toasts branchés ici aux étapes 3–2).
 * Structure minimale pour l’étape 1 — prête pour les slots marketing & e-commerce.
 */
export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2"
      >
        Aller au contenu
      </a>
      <main id="main" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
    </div>
  )
}
