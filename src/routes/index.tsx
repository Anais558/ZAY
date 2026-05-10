import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/layouts/RootLayout'
import { AboutPage } from '@/pages/AboutPage'
import { AdminDashboardPage } from '@/pages/admin/AdminDashboardPage'
import { AdminOrdersPage } from '@/pages/admin/AdminOrdersPage'
import { AdminProductsPage } from '@/pages/admin/AdminProductsPage'
import { AdminPromosPage } from '@/pages/admin/AdminPromosPage'
import { AdminCustomersPage } from '@/pages/admin/AdminCustomersPage'
import { CartPage } from '@/pages/CartPage'
import { CataloguePage } from '@/pages/CataloguePage'
import { CheckoutPage } from '@/pages/CheckoutPage'
import { AccountDashboardPage } from '@/pages/AccountDashboardPage'
import { WishlistPage } from '@/pages/WishlistPage'
import { OrdersHistoryPage } from '@/pages/OrdersHistoryPage'
import { AuthPage } from '@/pages/AuthPage'
import { HomePage } from '@/pages/HomePage'
import { LegalPage } from '@/pages/LegalPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { OrderConfirmationPage } from '@/pages/OrderConfirmationPage'
import { ProductPage } from '@/pages/ProductPage'
import { SearchResultsPage } from '@/pages/SearchResultsPage'
import { TrackingPage } from '@/pages/TrackingPage'
import { paths } from '@/routes/paths'

/**
 * Router unique (createBrowserRouter) : prépare les future data APIs / loaders
 * et garde les layouts imbriqués propres pour l’échelle e-commerce.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: paths.catalogue.slice(1), element: <CataloguePage /> },
      { path: 'produit/:slug', element: <ProductPage /> },
      { path: paths.search.slice(1), element: <SearchResultsPage /> },
      { path: paths.about.slice(1), element: <AboutPage /> },
      { path: paths.auth.slice(1), element: <AuthPage /> },
      { path: paths.account.slice(1), element: <AccountDashboardPage /> },
      { path: 'compte/favoris', element: <WishlistPage /> },
      { path: 'compte/commandes', element: <OrdersHistoryPage /> },
      { path: paths.cart.slice(1), element: <CartPage /> },
      { path: paths.checkout.slice(1), element: <CheckoutPage /> },
      { path: 'commande/confirmation', element: <OrderConfirmationPage /> },
      { path: 'suivi-livraison', element: <TrackingPage /> },
      { path: 'legal/cgv', element: <LegalPage variant="cgv" /> },
      { path: 'legal/retours', element: <LegalPage variant="returns" /> },
      { path: 'admin', element: <AdminDashboardPage /> },
      { path: 'admin/produits', element: <AdminProductsPage /> },
      { path: 'admin/commandes', element: <AdminOrdersPage /> },
      { path: 'admin/promos', element: <AdminPromosPage /> },
      { path: 'admin/clientes', element: <AdminCustomersPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
