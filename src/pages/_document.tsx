import { Head, Html, Main, NextScript } from 'next/document'
import tw from 'tailwind-styled-components'

const Footer = tw.footer`
  flex justify-center gap-1 py-6
  text-neutral-400`

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <Footer>
          {`made with ♥ in 🇦🇷 by `}
          <a href="mailto:nestor.britez@me.com">nestor.britez@me.com</a>
        </Footer>
      </body>
    </Html>
  )
}
