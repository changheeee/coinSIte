import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./coinChart.module.scss";
import ExchangeInfo from "./_components/ExchangeInfo";
import Star from "./_components/Star";

//변동율 스타일 테스트용
function RateDisplay({ rate }) {
  const rateStyle = rate > 0 ? style.positive : style.negative;
  const rateText = rate !== 0 ? `${rate > 0 ? `+${rate}` : rate}%` : "";

  return <strong className={rateStyle}>{rateText}</strong>;
}

export default function CoinChart() {
  const [coins, setCoins] = useState([]);
  // const [coinPrices, setCoinPrices] = useState({});

  const randomRate = Math.random() * (Math.random() > 0.5 ? 1 : -1);
  const numericRandomRate = parseFloat(randomRate * 100).toFixed(2);

  // const fetchCoinData = async () => {
  //   const endPoint = `https://api.upbit.com/v1/market/all?isDetails=true`;
  //   try {
  //     const responseData = await axios.get(endPoint);
  //     const coinData = responseData.data.slice(0, 5); // 첫 100개의 코인 데이터만 선택
  //     // const coinData = responseData.data;
  //     setCoins(coinData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchCoinMarket = async () => {
    const API_KEY = "CG-8rgsqdPvPixFukru3cPd5bYh";
    const endPoint = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&x_cg_demo_api_key=${API_KEY}`;

    try {
      const response = await axios.get(endPoint);
      // success
      setCoins(response.data);
      const json = response.data;
      console.log(json);
    } catch (ex) {
      console.error(ex);
    }
  };

  // const fetchCoinPriceData = async (market) => {
  //   const endPoint = `https://api.upbit.com/v1/ticker?markets=${market}`;
  //   try {
  //     const responseData = await axios.get(endPoint);
  //     const coinPriceData = responseData.data[0].trade_price;
  //     setCoinPrices((prevPrices) => ({
  //       ...prevPrices,
  //       [market]: coinPriceData,
  //     }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // fetchCoinData();
    fetchCoinMarket();
  }, []);

  console.log("coins", coins);
  // useEffect(() => {
  //   if (coins.length > 0) {
  //     coins.forEach((coin) => {
  //       fetchCoinPriceData(coin.market);
  //     });
  //   }
  // }, [coins]);

  return (
    <div className={style.coinChartWrapper}>
      <ExchangeInfo />
      <div className={style.coinListWrapper}>
        <ul className={style.coinListLabelContainer}>
          <li className={style.coinTitle}>가상자산명</li>
          <li className={style.coinTradeInfo}>현재가</li>
          <li className={style.coinTradeInfo}>김프</li>
          <li className={style.coinTradeInfo}>전일대비</li>
          <li className={style.coinTradeInfo}>고가대비(전일)</li>
          <li className={style.coinTradeInfo}>저가대비(전일)</li>
          <li className={style.coinTradeInfo}>거래금액(24H)</li>
        </ul>
        {coins.map((coin, i) => (
          <ul className={style.coinListContainer} key={i}>
            <li className={style.coinItem}>
              {/* 코인이미지 */}
              <img className={style.coinImg} src={coin.image} alt="" />
              {/* 북마크 버튼 */}
              <Star />
            </li>
            <li className={style.coinTitle}>
              <strong>{coin.id}</strong>
              <span>{coin.symbol.toUpperCase()}</span>
              {/* <strong>{coin.korean_name}</strong> */}
              {/* <span>{coin.market.replace("KRW-", "")}</span> */}
            </li>
            <li className={style.coinTradeInfo}>
              {/* <strong>{"66,860,000"}원</strong>
              <span>{"66,860,000"}원</span> */}
              <strong>{coin.current_price}원</strong>
              <span>{"66,860,000"}원</span>
            </li>
            <li className={style.coinTradeInfo}>
              <strong className={style.kimpRate}>+{numericRandomRate}%</strong>
              <span>{"764,303"}</span>
            </li>
            <li className={style.coinTradeInfo}>
              <RateDisplay rate={numericRandomRate} />
              <span>{"764,303"}</span>
            </li>
            <li className={style.coinTradeInfo}>
              <RateDisplay rate={numericRandomRate} /> <span>{"764,303"}</span>
            </li>
            <li className={style.coinTradeInfo}>
              <RateDisplay rate={numericRandomRate} /> <span>{"764,303"}</span>
            </li>
            <li className={style.coinTradeInfo}>
              <strong>{"2,868 억"}</strong>
              <span>{"3조 7,610 억"}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
