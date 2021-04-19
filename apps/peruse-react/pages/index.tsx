import { useState } from "react"
import { Button, Select, Spacer } from "../components"
import { Navbar, BookGrid } from "../widgets"
import { Option } from "../common/types"
import { Highlights } from "../widgets/highlights/Highlights"

export default function Home() {

  const [selected, setSelected] = useState("books")
  const [icon, setIcon] = useState("book")

  const options: Option[] = [
    {
      label: "Books",
      value: "books",
      iconName: "book"
    },
    {
      label: "Highlights",
      value: "highlights",
      iconName: "text_snippet"
    },
  ]

  const bookSelectHandleChange = (selectedOption: Option) => {
    setIcon(selectedOption.iconName || "")
    setSelected(selectedOption.value || "books")
  }

  return (
    <div className="container">

      <Navbar />

      <Spacer marginTop='6' marginBottom='6' />

      <Spacer marginTop="2" />
      <div style={{ display: 'flex', paddingBottom: 4, borderBottom: `1px solid hsl(220, 9%, 87%)` }}>
        <Select label="Books" options={options} handleChange={bookSelectHandleChange} hasIconLeft={true} iconLeftName={icon} />
        <div style={{ flex: 5, justifyContent: 'flex-end' }} className="is-flex">
          <Select label="Filter" options={options} handleChange={() => { }} hasIconLeft={true} iconLeftName="filter_list" />
        </div>
      </div>
      <Spacer marginBottom="2" />

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
