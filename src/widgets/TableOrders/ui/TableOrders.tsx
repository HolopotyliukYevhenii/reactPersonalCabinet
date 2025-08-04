import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import styles from "./TableOrders.module.less";
import { db } from "src/shared/lib/firebase/config";
import { collection, onSnapshot, doc, getDoc} from "firebase/firestore";
import { DownloadPdfButton } from "src/widgets/TableOrders/model/createPdf";
import { ButtonLink } from "src/shared/ui/ButtonLink/ButtonLink";
export interface Order {
  documentId: string;
  subscriptionId?: string;
  customerId?: string;
  planName?: string;
  priceEUR?: number;
  currency?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  paymentMethodId?: string;
  createdAt?: string;
}

export const TableOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "orders"),
      (snapshot) => {
        const ordersData = snapshot.docs.map((doc) => {
          const data = doc.data();

          const toIso = (field: any) => {
            return field?.seconds ? new Date(field.seconds * 1000).toISOString() : undefined;
          };

          return {
            documentId: doc.id,
            subscriptionId: data.object.id ?? undefined,
            // customerId: data.customerId ?? undefined,?
            planName: data.object.items.data[0].plan.nickname ?? undefined,
            priceEUR: data.object.items.data[0].plan.amount / 100  || undefined,
            currency: data.currency ?? undefined,
            startDate: data.object.start_date,
            endDate: data.object.end_date,
            status: data.object.status ?? undefined,
          };
        });

        setOrders(ordersData);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders");
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" p={3}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (orders.length === 0) {
    return (
      <Box p={3}>
        <Typography>No orders found.</Typography>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Subscription ID</TableCell>
            <TableCell>Plan</TableCell>
            <TableCell>Price (EUR)</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.subscriptionId ?? Math.random()}>
              <TableCell>{order.subscriptionId || "-"}</TableCell>
              <TableCell>{order.planName || "-"}</TableCell>
              <TableCell>{order.priceEUR !== undefined ? order.priceEUR.toFixed(2) : "-"}</TableCell>
              <TableCell>{order.status || "-"}</TableCell>
              <TableCell>{order.startDate ? new Date(Number(order.startDate) * 1000).toLocaleDateString() : "-"}</TableCell>
              <TableCell>{order.endDate ? new Date(Number(order.endDate) * 1000).toLocaleDateString() : "-"}</TableCell>
              <TableCell>
                <DownloadPdfButton  order={[{
                    subscriptionId: order.subscriptionId,
                    customerId: order.customerId,
                    planName: order.planName,
                    priceEUR: order.priceEUR,
                    currency: order.currency,
                    startDate: order.startDate,
                    endDate: order.endDate,
                    status: order.status,
                    paymentMethodId: order.paymentMethodId,
                    createdAt: order.createdAt,
              }]} nameFile={`order_${order.documentId}.pdf`} />
              </TableCell>
              <TableCell>
                <ButtonLink href={`order/${order.documentId}`}>View Details</ButtonLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
