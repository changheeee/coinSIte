import React from "react";
import style from "./liveChat.module.scss";

// type Props = {
//   handleChatHide: () => void,
// };

export default function LiveChat({ handleChatHide }) {
  const otherChat = [
    {
      user: "유저 1",
      message: "1번째 메시지: 상황에 따른 메시지",
      createdAt: "08:14",
    },
    {
      user: "유저 2",
      message: "2번째 메시지: 상황에 따른 메시지",
      createdAt: "08:15",
    },
    {
      user: "유저 3",
      message: "3번째 메시지: 상황에 따른 메시지",
      createdAt: "08:16",
    },
    {
      user: "유저 4",
      message: "4번째 메시지: 상황에 따른 메시지",
      createdAt: "08:17",
    },
    {
      user: "유저 5",
      message: "5번째 메시지: 상황에 따른 메시지",
      createdAt: "08:18",
    },
    {
      user: "유저 6",
      message: "6번째 메시지: 상황에 따른 메시지",
      createdAt: "08:19",
    },
    {
      user: "유저 7",
      message: "7번째 메시지: 상황에 따른 메시지",
      createdAt: "08:20",
    },
    {
      user: "유저 8",
      message: "8번째 메시지: 상황에 따른 메시지",
      createdAt: "08:21",
    },
    {
      user: "유저 9",
      message: "9번째 메시지: 상황에 따른 메시지",
      createdAt: "08:22",
    },
    {
      user: "유저 10",
      message: "10번째 메시지: 상황에 따른 메시지",
      createdAt: "08:23",
    },
  ];

  const myChat = {
    user: "유저",
    message: "내가보낸 메시지",
    createdAt: "21:32", //date 포맷 필요
  };

  return (
    <div className={style.chatContainer}>
      <div className={style.chatContent}>
        <div className={style.header}>
          <div className={style.headerLeft}>
            <h3 className={style.headerTitle}>채팅</h3>
            {/* <div className={style.userCount}>
              <img
                src="/assets/people.svg"
                alt=""
                className={style.userCountIcon}
              />
              <span>{(1032).toLocaleString()}</span>
            </div> */}
            <img src="/assets/chatHide.svg" alt="" onClick={handleChatHide} />
          </div>
          <div className={style.headerRight}>
            <span>채팅규정</span>
            <img src="/assets/info.svg" alt="" />
          </div>
        </div>

        <div className={style.chatArea}>
          {otherChat.map((item, i) => (
            <div key={i} className={style.chatMessage}>
              <b className={style.chatUser}>{item.user}</b>
              <div className={style.messageContent}>
                <p className={style.messageText}>{item.message}</p>
                <span className={style.messageTime}>{item.createdAt}</span>
              </div>
            </div>
          ))}

          <div className={style.myMessageContainer}>
            <div className={style.myMessageContent}>
              <span className={style.myMessageTime}>{myChat.createdAt}</span>
              <p className={style.myMessageText}>{myChat.message}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.messageInputArea}>
        <input type="text" className={style.messageInput} />
        <img src="/assets/send.svg" alt="" className={style.sendIcon} />
      </div>
    </div>
  );
}
