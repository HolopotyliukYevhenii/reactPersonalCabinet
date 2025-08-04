import React, { useState } from "react";

import styles from './addOrderJson.module.less';

import { parseJsonFile } from 'src/shared/lib/parseJsonFile/parseJsonFile';
import { createOrder } from "src/features/createOrder/createOrder";

export const AddOrderJson: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [parsedData, setParsedData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setParsedData(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a JSON file");
      return;
    }

    try {
      const data = await parseJsonFile(file);
      setParsedData(data);
      setError(null);
      createOrder(data); // Call the createOrder function to handle the parsed data
      // Здесь можно вызвать функцию из features, которая обрабатывает data
      // Например: await addOrdersFromFile(file);
    } catch (err) {
      setError((err as Error).message);
      setParsedData(null);
    }
  };

  return (
    <form className={styles.addOrderJSON}onSubmit={handleSubmit}>
      <input type="file" accept=".json,application/json" onChange={handleFileChange} />
      <button className={styles.button} type="submit" disabled={!file}>
        Upload JSON
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {parsedData && (
        <pre
          style={{
            marginTop: 10,
            padding: 10,
            backgroundColor: "#f0f0f0",
            maxHeight: 200,
            overflow: "auto",
          }}
        >
          {JSON.stringify(parsedData, null, 2)}
        </pre>
      )}
    </form>
  );
};
