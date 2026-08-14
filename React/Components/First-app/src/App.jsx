import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar />
      <Footer />
      <div className="cards">
        <Card title="Card 1" description="This is the description for Card 1." />
        <Card title="Card 2" description="This is the description for Card 2." />
        <Card title="Card 3" description="This is the description for Card 3." />
        <Card title="Card 4" description="This is the description for Card 4." />
      </div>
    </>
  )
}

export default App
