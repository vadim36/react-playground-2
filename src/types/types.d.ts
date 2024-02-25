interface IPost {
  id: number,
  title: string,
  body: string
}

interface SelectOption {
  value: SortOptions,
  body: string
}

interface IFilterQuery {
  sortQuery: SortOptions,
  searchQuery: string
}