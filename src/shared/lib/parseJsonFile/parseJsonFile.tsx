import React from "react";

export const parseJsonFile = (file: File): Promise<any> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        const jsonData = JSON.parse(event.target?.result as string);
        resolve(jsonData);
      } catch (error) {
        reject(new Error("Failed to parse JSON file"));
      }
    };
    
    reader.onerror = () => {
      reject(new Error("Error reading file"));
    };
    
    reader.readAsText(file);
  });
}

// Usage example
// const fileInput = document.querySelector('input[type="file"]');
// fileInput?.addEventListener('change', (event) => {
//   const file = (event.target as HTMLInputElement).files?.[0];
//   if (file) {
//     parseJsonFile(file)
//       .then(data => console.log(data))
//       .catch(error => console.error(error));
//   }
// });
