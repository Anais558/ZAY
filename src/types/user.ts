export type UserId = string

export type UserRole = 'customer' | 'admin' | 'staff'

export type User = {
  id: UserId
  email: string
  firstName?: string
  lastName?: string
  role: UserRole
}
