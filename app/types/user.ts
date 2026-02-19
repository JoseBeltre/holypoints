import type { MembershipShort } from './memberships'

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
    birthDate?: string,
    points?: {
      jovenes: number,
      conquistadores: number,
      guias: number
    },
    ministries?: MembershipShort[]
  }