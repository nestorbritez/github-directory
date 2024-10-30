import type { Users } from '@/lib/entities/User'
import { useAPIQuery } from '@/lib/hooks/useAPIQuery'

const useUserListData = () => useAPIQuery<Users>(['api-users'], '/users')

export { useUserListData }
