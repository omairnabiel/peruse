import { Divider, Heading } from "../components"
import { Navbar, BookGrid } from "../widgets"
export default function Home() {
  return (
      <div className="container">
        <Navbar />
        <Heading size={"large"} title={"Library"}/>
        <Divider/>
        <BookGrid />
      </div>
  )
}
