export interface Membership {
  id: string
  userId: string
  ministryId: 'jovenes' | 'conquistadores' | 'guias'
  role: string
}

export interface MembershipShort {
  ministryId: Membership['ministryId']
  role: string
}
