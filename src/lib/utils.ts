import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Fusionne les classes Tailwind en résolvant les conflits (pattern Shadcn / production).
 * Indispensable pour les variantes CVA + classes passées en props.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
