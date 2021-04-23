import { useState } from "react"
import { Button, Icon, IconButton, Select, Spacer } from "../components"
import { Navbar, BookGrid } from "../widgets"
import { Option } from "../common/types"
import { Highlights } from "../widgets/highlights/Highlights"
import { FloatingButton } from "../components/floating-button/FloatingButton"

export default function Home() {

  const [selected, setSelected] = useState("books")
  const [icon, setIcon] = useState("bookmarks")

  const options: Option[] = [
    {
      label: "Books",
      value: "books",
      iconName: "bookmarks"
    },
    {
      label: "Highlights",
      value: "highlights",
      iconName: "sticky_note_2"
    },
  ]

  const sortOptions: Option[] = [
    {
      label: "Created Date",
      value: "created_date",
      iconName: "schedule"
    },
    {
      label: "Last Read",
      value: "last_read",
      iconName: "auto_stories"
    },
    {
      label: "Most Highlighted",
      value: "most_highlighted",
      iconName: "try"
    },
  ]

  const bookSelectHandleChange = (selectedOption: Option) => {
    setIcon(selectedOption.iconName || "")
    setSelected(selectedOption.value || "books")
  }

  return (
    <>

      <div className="container">
        <FloatingButton bottom="30" right="30" iconName="file_upload" />

        <Navbar />

        <Spacer marginTop='6' marginBottom='6' />

        {/* Filter Buttons Bar */}
        <Spacer marginTop="2" />
        <div style={{ display: 'flex', paddingBottom: 4, borderBottom: `1px solid hsl(220, 9%, 87%)` }}>
          <Select label="Books" options={options} handleChange={bookSelectHandleChange} hasIconLeft={true} iconLeftName={icon} />
          <div style={{ flex: 5, justifyContent: 'flex-end' }} className="is-flex">
            <Select label="Last Read" placement="right" options={sortOptions} handleChange={() => { }} hasIconLeft={true} iconLeftName="sort" />
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
    </>
  )
}
