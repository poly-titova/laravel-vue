export interface IColumn {
  type?: '' | 'actions',
  title?: string,
  minWidth?: boolean
}

export type TColumns = Array<IColumn>
