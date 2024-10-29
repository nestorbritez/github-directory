import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'

import { Button } from '@/lib/ui/Button'

const Skeleton = tw.span`size-[45px] rounded-full`

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setMounted(true)
    setDarkMode(theme === 'dark')
  }, [theme])

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')

    console.log(theme)
  }

  if (!mounted) {
    return <Skeleton />
  }

  return (
    <Button onClick={toggleDarkMode} $intent="ghost" $size="icon">
      {darkMode ? <Moon className="size-5" /> : <Sun className="size-5" />}
    </Button>
  )
}
