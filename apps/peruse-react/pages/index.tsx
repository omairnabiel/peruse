import { useState } from "react"
import { Button, Select, Spacer } from "../components"
import { Navbar, BookGrid } from "../widgets"
import { Highlights } from "../widgets/highlights/Highlights"
export default function Home() {

  const [selected, setSelected] = useState("books")

  const options = [
    {
      label: "Books",
      value: "books"
    },
    {
      label: "Highlights",
      value: "highlights"
    },
  ]

  const bookSelectHandleChange = (value: string) => {
    setSelected(value)
  }

  return (
    <div className="container">

      <Navbar />
     
      <Spacer marginTop='6' marginBottom='6'/>

      <div className="is-flex is-justify-content-space-between">
        <Select label="Books" options={options} handleChange={bookSelectHandleChange} />
        <Button title="Upload" onClick={() => { }} hasIcon={true} iconName="file_upload"/>
      </div>

      {
        selected === "books"
          ?
          <BookGrid />
          :
          <Highlights />
      }


    </div>
  )
}
