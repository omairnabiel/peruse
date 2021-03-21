import { Divider } from "../components"
import { Navbar, BookGrid } from "../widgets"
export default function Home() {
  return (
      <div className="container">
        <Navbar />
        <Divider/>
        <BookGrid />
      </div>
  )
}
