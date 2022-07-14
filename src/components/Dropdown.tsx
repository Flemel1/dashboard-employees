import { ChangeEvent } from 'react'

type DropdownProps = {
    year: string
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Dropdown = ({year,onChange}: DropdownProps) => {
  return (
    <select name="year" id="year" onChange={onChange}>
      <option selected={year === "1997" && true} value="1997">
        1997
      </option>
      <option selected={year === "1998" && true} value="1998">
        1998
      </option>
      <option selected={year === "1999" && true} value="1999">
        1999
      </option>
      <option selected={year === "2000" && true} value="2000">
        2000
      </option>
      <option selected={year === "2001" && true} value="2001">
        2001
      </option>
    </select>
  )
}

export default Dropdown
