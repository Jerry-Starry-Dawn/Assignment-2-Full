import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'
import { Book } from '@/types/book'

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Id' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Title' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('title')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Type' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>
          <span className='max-w-32 truncate font-normal sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('type')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'price',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Price' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>
          <span className='max-w-32 truncate font-normal sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('price')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'publisher',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Publisher' />
    ),
    cell: ({ row }) => {
      const { name } = row.original.publisher
      return (
        <div className='flex items-center'>
          <span>{name}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'advance',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Advance' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('advance')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'bookAuthors',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Authors' />
    ),
    cell: ({ row }) => {
      const { royalty, bookAuthors } = row.original
      return (
        <div className='flex space-x-2'>
          {<Badge variant='outline'>{royalty}</Badge>}
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {bookAuthors
              .map(({ author }) => `${author.firstName} ${author.lastName}`)
              .join(', ')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'publishedDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Published Date' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {new Date(
              row.getValue<string>('publishedDate')
            ).toLocaleDateString()}
          </span>
        </div>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
