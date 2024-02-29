import React, { useState } from "react";
import MarketTrends from "../market-trends/MarketTrends";
import LiveChat from "../live-chat/LiveChat";
import style from "./nav.module.scss";

export default function Nav() {
  const [isLogin, setIsLogin] = useState(false);
  const [isChatHide, setIsChatHide] = useState(true);

  const handleChatHide = () => {
    setIsChatHide(!isChatHide);
  };

  return (
    <div className={style.navWrapper}>
      <MarketTrends />
      <div className={style.navBar}>
        <div className={style.navContent}>
          <div className={style.logoSection}>
            LOGO
            <ul className={style.menuItems}>
              <li>공지사항</li>
              <li>커뮤니티</li>
              <li>검증방</li>
              <li>사기제보</li>
            </ul>
          </div>
          {!isLogin ? (
            <ul className={style.authLinks}>
              <li>로그인</li>
              <li>회원가입</li>
            </ul>
          ) : (
            <ul className={style.userInfo}>
              <li>{"유저 닉네임"}</li>
              <li>로그아웃</li>
            </ul>
          )}
        </div>
      </div>

      <div className={style.contentSection}>
        {!isChatHide ? (
          <LiveChat handleChatHide={handleChatHide} />
        ) : (
          <img
            src="/assets/chatToggle.svg"
            alt=""
            className={style.chatToggle}
            onClick={handleChatHide}
          />
        )}
      </div>
    </div>
  );
}
