import type { Users } from '@/lib/entities/User'
import { useSuspenseAPI } from '@/lib/hooks/useSuspenseAPI'

const useUserListData = () => useSuspenseAPI<Users>(['api-users'], '/users')

export { useUserListData }
