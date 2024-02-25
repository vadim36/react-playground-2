import {ChangeEvent, Dispatch, FC, SetStateAction} from 'react'
import { Select } from '../UI/Select'
import { SortOptions } from '../utils/enums'
import { Input } from '../UI/Input'

interface PostFilterProps {
  filter: IFilterQuery,
  setFilter: Dispatch<SetStateAction<IFilterQuery>>
}

export const PostFilter: FC<PostFilterProps> = ({filter, setFilter}) => {
  const selectOptions: SelectOption[] = [
    {value: SortOptions.title, body: 'По названию'},
    {value: SortOptions.body, body: 'По описанию'},
  ]

  return (
    <form className='flex gap-2'>
      <Select 
        value={filter.sortQuery}
        onChange={(sortQuery: SortOptions):void => {
          return setFilter({...filter, sortQuery})
        }}
        defaultValue='Сортировка' 
        options={selectOptions}/>
      
      <Input
        value={filter.searchQuery}
        onChange={(event: ChangeEvent<HTMLInputElement>):void => {
          return setFilter({...filter, searchQuery: event.target.value})
        }} 
        placeholder='Поиск...'
      />
    </form>
  )
}