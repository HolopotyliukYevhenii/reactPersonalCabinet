// pdfCreator.tsx
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type GenericObject = Record<string, any>;

/**
 * Генерирует PDF из массива объектов с динамическими ключами.
 * @param data - массив объектов с любыми ключами и значениями
 * @param fileName - имя файла для сохранения
 */
export const pdfCreator = (data: GenericObject[], fileName = "table.pdf") => {
  if (!data.length) {
    console.warn("No data provided for PDF generation");
    return;
  }

  const columns = Object.keys(data[0]);
  const rows = data.map(item =>
    columns.map(col => formatCell(item[col]))
  );

  function formatCell(value: any): string {
    if (value === null || value === undefined) return "-";
    if (typeof value === "string" && isIsoDate(value)) {
      return new Date(value).toLocaleDateString();
    }
    if (typeof value === "number") return value.toString();
    return String(value);
  }

  function isIsoDate(str: string): boolean {
    return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(str);
  }

  const doc = new jsPDF();

  autoTable(doc, {
    head: [columns],
    body: rows,
  });

  doc.save(fileName);
};