import React from "react";
import style from "./marketInsight.module.scss";
export default function MarketInsight() {
  return (
    <div>
      <div className={style.priceSection}>
        <div className={style.priceBox}>
          <h4 className={style.boxTitle}>실시간 가격</h4>
          <div></div>
          <div></div>
        </div>
        <div className={style.premiumCalculator}>
          <h4 className={style.boxTitle}>김프 계산기</h4>
        </div>
      </div>
    </div>
  );
}
