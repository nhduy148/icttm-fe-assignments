import { Trading } from '@/types';
import React from 'react';

import { DataTable } from './DataTable';
import { columns } from './columns';

interface IProps {
  data: Trading[];
}

const TradeCountryTable: React.FC<IProps> = ({ data }) => {
  return (
    <div className="h-[400px]">
      <DataTable columns={columns} data={data} stickyHeader withPagination />
    </div>
  );
};

export default React.memo(TradeCountryTable);
