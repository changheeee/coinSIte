import { BrowserRouter } from "react-router-dom";
import Nav from "./components/common/nav/Nav";
import CoinChart from "components/coin-chart/CoinChart";
import MarketInsight from "components/common/market-insight/MarketInsight";
import RealTimeBTC from "components/realTimeBTC/RealTimeBTC";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Nav />
        <div className="mt-[150px] ">
          <MarketInsight />
          <RealTimeBTC />
          <CoinChart />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
