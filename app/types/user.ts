export interface User {
  uid?: string
  firstName: string
  lastName: string
  email?: string
  photoUrl?: string
  createdAt: Date
  createdBy: string
  active: boolean,
  address?: string,
  phoneNumber?: string,
  birthDate?: string
}