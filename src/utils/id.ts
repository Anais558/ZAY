/**
 * Identifiants côté client (lignes panier / drafts UI). Les IDs métiers viennent du backend.
 */
export function generateId(prefix: string): string {
  return `${prefix}_${crypto.randomUUID()}`
}
