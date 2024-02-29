import React from "react";
import style from "./marketTrends.module.scss";

function formatCurrency(number) {
  const 억 = 100000000;
  const 조 = 억 * 10000;
  const 조단위 = Math.floor(number / 조);
  const 억단위 = Math.floor((number % 조) / 억);

  let formattedNumber = "";
  if (조단위 > 0) {
    formattedNumber += `${조단위.toLocaleString()}조 `;
  }
  if (억단위 > 0 || 조단위 === 0) {
    formattedNumber += `${억단위.toLocaleString()}억`;
  }

  return formattedNumber;
}

export default function MarketTrends() {
  const bitCoinShare = 52.4;
  const marketCap = 2500231700000000;
  const ondDayTraiding = 412507000000000;

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.stats}>
          <p className={style.statItem}>
            <span className={style.label}>BTC 점유율 </span>
            <strong className={style.value}>{bitCoinShare}%</strong>
            <b className={style.changePositive}>0.01%</b>
          </p>
          <p className={style.statItem}>
            <span className={style.label}>시가총액</span>
            <strong className={style.value}>{formatCurrency(marketCap)}</strong>
            <b className={style.changePositive}>3.58%</b>
          </p>
          <p className={style.statItem}>
            <span className={style.label}>24시간 거래량</span>
            <strong className={style.value}>
              {formatCurrency(ondDayTraiding)}
            </strong>
            <b className={style.changePositive}>+43.52%%</b>
          </p>
        </div>
      </div>
    </div>
  );
}
