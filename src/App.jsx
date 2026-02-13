import { Category, Footer, Header, Hero, Trending } from "./modules"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Category />
        <Trending />
      </main>
      <Footer />
    </>
  )
}

export default App