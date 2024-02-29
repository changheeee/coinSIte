import React, { useState, useEffect } from "react";
import style from "./realTimeBTC.module.scss";
import Chart from "./chart/Chart";

export default function RealTimeBTC() {
  const [selectedCoin, setSelectedCoin] = useState("BTC");

  // 코인 선택 시 상태 업데이트
  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  // 선택된 코인에 따라 차트 데이터 업데이트 (여기서는 차트 컴포넌트에 props로 전달)
  useEffect(() => {
    // 여기서 선택된 코인에 따른 데이터 페칭 로직 추가
  }, [selectedCoin]);

  return (
    <div className={style.chartWrapper}>
      <h4 className={style.boxTitle}>실시간 BTC 차트</h4>
      <select
        className={style.coinSelector}
        onChange={handleCoinChange}
        value={selectedCoin}
        name="coins"
        id="coins"
      >
        <option value="BTC">비트코인</option>
        <option value="ETH">이더리움</option>
        <option value="ETC">이더리움 클래식</option>
      </select>
      <div className={style.chartContainer}>
        <Chart coin={selectedCoin} />
      </div>
    </div>
  );
}
