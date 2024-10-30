import tw from 'tailwind-styled-components'

const Wrapper = tw.div`w-full`
const Container = tw.div`mx-auto max-w-screen-xl px-6`
const Main = tw.main`my-6 flex flex-col gap-6`
const Grid = tw.div`grid gap-6`
const Card = tw.div`flex items-center gap-6 bg-[var(--bg-card)] shadow`

export { Card, Container, Grid, Main, Wrapper }
