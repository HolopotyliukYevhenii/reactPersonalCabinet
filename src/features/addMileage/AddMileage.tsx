
import React from "react";

import styles from "./AddMileage.module.less";

export const AddMileage: React.FC = () => {
  return (
    <div className={styles.addMileage}>
        <h3>Add Mileage</h3>
        <form>
            <label htmlFor="mileage">Mileage:</label>
            <input type="number" id="mileage" name="mileage" required />
            <button type="submit">Submit</button>
        </form>
        <p>Enter the mileage you want to add.</p>
        <p>Make sure to enter a valid number.</p>
    </div>
  );
};