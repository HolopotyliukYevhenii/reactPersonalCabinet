import React from "react";
import { useParams } from "react-router-dom";
// ================================================================
// ============================ Styles ============================
// import styles from "./OrderPage.module.less";
import styles from "./OrgerPage.module.less";
// ================================================================
// ============================ Components ========================
import { TitlePage } from "src/shared/ui/TitlePage/TitlePage";
import { AddMileage } from "src/features/addMileage/AddMileage";
import { OrderInfo } from "src/features/getOrder/ui/OrderInfo";

// ================================================================


export const OrderPage: React.FC = () => {
    const orderId = useParams<{ orderId: string }>().orderId!;


    return (
        <div className={styles.orderPage}>

            <div className={styles.orderPage__content}>
                
                <div className={styles.orderPage__info}>
                    <OrderInfo orderId={orderId}/>
                </div>

            </div>

            <div className={styles.orderPage__mileage}>
                <TitlePage title="Add Mileage" />
                <AddMileage />
            </div>


        </div>

    );
}