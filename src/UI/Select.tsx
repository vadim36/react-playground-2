import {ChangeEvent, FC, ReactNode} from 'react'
import { SortOptions } from '../utils/enums'

interface SelectProps {
  defaultValue: string,
  options: SelectOption[],
  value: SortOptions,
  onChange: (sortQuery: SortOptions) => void
}

export const Select:FC<SelectProps> = (props) => {
  return (
    <select 
      value={props.value}
      onChange={(event: ChangeEvent<HTMLSelectElement>):void => {
        return props.onChange(event.target.value as SortOptions)
      }}
      className='outline outline-2 outline-sky-500 text-2xl'
    >
      <option selected disabled>{props.defaultValue}</option>
      {props.options.map(({value, body}: SelectOption):ReactNode => {
        return <option key={value} value={value}>{body}</option>
      })}
    </select>
  )
}