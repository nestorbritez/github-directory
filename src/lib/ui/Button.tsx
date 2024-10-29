import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import tw from 'tailwind-styled-components'

const buttonVariants = cva(
  'border px-4 py-2 text-sm uppercase tracking-wider transition',
  {
    variants: {
      $intent: {
        primary: [
          'border-red-500 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300',
        ],
        secondary: [
          'border-fuchsia-400 hover:border-fuchsia-400 hover:text-fuchsia-600',
        ],
        neutro: [
          'border-neutral-400 hover:border-neutral-400 hover:text-black text-neutral-500 dark:text-neutral-300 dark:hover:text-white',
        ],
        ghost: ['border-0 hover:bg-neutral-100 dark:hover:bg-neutral-800'],
      },
      $size: {
        icon: [
          'p-1 size-10 rounded-full flex place-content-center place-items-center',
        ],
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4'],
      },
    },
    defaultVariants: {
      $intent: 'primary',
      $size: 'medium',
    },
  },
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

export const Button = tw.button`
  ${(props: ButtonVariantProps) => buttonVariants(props)}
`
