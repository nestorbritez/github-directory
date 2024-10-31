import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'

import { Button } from './Button'

describe('<Button/>', () => {
  it('renders with default variants', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('border-purple-500')
    expect(button).toHaveClass('text-base')
  })

  it('renders with primary intent', () => {
    render(<Button $intent="primary">Primary</Button>)
    const button = screen.getByRole('button', { name: /primary/i })
    expect(button).toHaveClass('border-purple-500')
    expect(button).toHaveClass('hover:border-purple-400')
  })

  it('renders with secondary intent', () => {
    render(<Button $intent="secondary">Secondary</Button>)
    const button = screen.getByRole('button', { name: /secondary/i })
    expect(button).toHaveClass('border-purple-400')
  })

  it('renders with neutro intent', () => {
    render(<Button $intent="neutro">Neutro</Button>)
    const button = screen.getByRole('button', { name: /neutro/i })
    expect(button).toHaveClass('border-neutral-400')
    expect(button).toHaveClass('text-neutral-500')
  })

  it('renders with ghost intent', () => {
    render(<Button $intent="ghost">Ghost</Button>)
    const button = screen.getByRole('button', { name: /ghost/i })
    expect(button).toHaveClass('border-0')
    expect(button).toHaveClass('hover:bg-neutral-100')
  })

  it('renders with small size', () => {
    render(<Button $size="small">Small</Button>)
    const button = screen.getByRole('button', { name: /small/i })
    expect(button).toHaveClass('text-sm')
    expect(button).toHaveClass('py-1')
    expect(button).toHaveClass('px-2')
  })

  it('renders with medium size', () => {
    render(<Button $size="medium">Medium</Button>)
    const button = screen.getByRole('button', { name: /medium/i })
    expect(button).toHaveClass('text-base')
    expect(button).toHaveClass('py-2')
    expect(button).toHaveClass('px-4')
  })

  it('renders with icon size', () => {
    render(<Button $size="icon">Icon</Button>)
    const button = screen.getByRole('button', { name: /icon/i })
    expect(button).toHaveClass('p-1')
    expect(button).toHaveClass('size-10')
    expect(button).toHaveClass('rounded-full')
  })

  it('combines multiple variants correctly', () => {
    render(
      <Button $intent="secondary" $size="small">
        Combo
      </Button>,
    )
    const button = screen.getByRole('button', { name: /combo/i })
    expect(button).toHaveClass('border-purple-400')
    expect(button).toHaveClass('text-sm')
    expect(button).toHaveClass('py-1')
    expect(button).toHaveClass('px-2')
  })
})
