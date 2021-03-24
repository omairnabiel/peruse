import { Divider, Heading, Button , Select} from "../components"
import { Navbar, BookGrid , Toolbar} from "../widgets"
export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="mt-30 mb-20">
        {/* <Heading size={"large"} title={"Dashboard"} /> */}
      </div>
      <Toolbar/>
      <BookGrid />

    </div>
  )
}
