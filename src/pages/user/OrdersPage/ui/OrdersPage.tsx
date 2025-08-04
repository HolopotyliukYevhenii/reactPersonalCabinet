
import React, { useEffect, useState } from 'react';
// =====================================================================
// =========================== Styles ==================================
import styles from './OrdersPage.module.less';
// =====================================================================
// =========================== UI Components ===========================

import {AddOrderJson} from 'src/features/addOrderJson/ui/addOrderJson';
// =====================================================================
// =========================== Assets ==================================
import { getOrdersList } from 'src/features/getOrdersList/getOrdersList';
import { TitlePage } from 'src/shared/ui/TitlePage/TitlePage';

import { TableOrders } from 'src/widgets/TableOrders/ui/TableOrders';
const rows = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Alice', age: 25 },
  { id: 3, name: 'Bob', age: 35 },
];

export const OrdersPage: React.FC = () => {
  
  return (
    <div>
      <TitlePage title="Orders" />
      
      <AddOrderJson />
      <TableOrders  />

      
    </div>
    
  );
};