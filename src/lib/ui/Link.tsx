import NextLink from 'next/link'
import tw from 'tailwind-styled-components'

const Link = tw(
  NextLink,
)`text-indigo-500 hover:text-indigo-900 dark:text-indigo-400`

export { Link }
