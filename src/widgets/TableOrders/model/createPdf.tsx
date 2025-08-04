import { pdfCreator } from "src/shared/lib/pdfCreator/pdfCreator";
import { Order } from "src/features/getOrdersList/getOrdersList";

interface DownloadPdfButtonProps {
  order: Order[],
  nameFile?: string;
}

export const DownloadPdfButton: React.FC<DownloadPdfButtonProps> = ({ order, nameFile }) => {
  return (
    <button onClick={() => pdfCreator(order, nameFile || "order.pdf")}>
      Download Order PDF
    </button>
  );
};