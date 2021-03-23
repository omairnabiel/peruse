import { Divider, Heading } from "../components"
import { Navbar, BookGrid } from "../widgets"
export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="mt-30">
        <Heading size={"large"} title={"Books"} />
      </div>
      <Divider />
      <BookGrid />
    </div>
  )
}
