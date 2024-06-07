import { Button } from '@/components/ui/button';
import { Trading } from '@/types';
import { ColumnDef, HeaderContext } from '@tanstack/react-table';
import { ArrowDown, ArrowUp } from 'lucide-react';
import React from 'react';

type HeaderWithSortingProps = React.PropsWithChildren<Pick<HeaderContext<Trading, unknown>, 'column'>>;
const HeaderWithSorting = ({ column, children }: HeaderWithSortingProps) => {
  const isSorted = column.getIsSorted();
  const Icon = isSorted === 'asc' ? ArrowUp : ArrowDown;
  return (
    <Button
      size="sm"
      className="my-2 h-auto text-nowrap px-0 py-0 hover:bg-transparent hover:opacity-60"
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {children}
      <Icon className="ml-1 h-4 w-4" />
    </Button>
  );
};

export const columns: ColumnDef<Trading>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => <HeaderWithSorting column={column}>Country</HeaderWithSorting>,
    cell: ({ row }) => (
      <div className="align-center flex max-w-[160px] gap-1">
        <img width="28" height="28" src={row.original.icon} className="object-contain" alt={row.original.name} />
        <span className="text-ellipsis text-sm leading-[1.2] text-gray-500">{row.original.name}</span>
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: 'region',
    header: ({ column }) => <HeaderWithSorting column={column}>Area</HeaderWithSorting>,
  },
  {
    accessorKey: 'proportion',
    header: ({ column }) => <HeaderWithSorting column={column}>Proportion (%)</HeaderWithSorting>,
  },
  {
    accessorKey: 'shipments',
    header: ({ column }) => <HeaderWithSorting column={column}>Shipments</HeaderWithSorting>,
  },
  {
    accessorKey: 'weight',
    header: ({ column }) => <HeaderWithSorting column={column}>Weight (KG)</HeaderWithSorting>,
  },
  {
    accessorKey: 'teu',
    header: ({ column }) => <HeaderWithSorting column={column}>Area</HeaderWithSorting>,
  },
  {
    accessorKey: 'value-usd',
    header: ({ column }) => <HeaderWithSorting column={column}>Value (USD)</HeaderWithSorting>,
  },
];
