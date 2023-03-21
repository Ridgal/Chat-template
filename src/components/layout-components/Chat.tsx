import React from 'react'
import { useAppSelector } from '../../hooks/redux-hooks';
import { Loader } from '../shared-components/Loader';


const Chat: React.FC = () => {
  const chats = useAppSelector((state) => state.chat.chats);
  const loading = useAppSelector((state) => state.chat.loading);

  function createdTime(timestamp: number) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  };
  
  console.log(chats);
  
  if (loading) {
    return <Loader />
  };

  return (
    <div className="chat" id="scroll-chat">
      {chats?.map((item) => {
        if (item.user?.you) {
          return (
            <div key={item.id} className="chat__item__user" id="user-message">
              <div className="chat__item__user__text">
                <p className="chat__item__user__text__desc">
                  {item.message}
                  <span className="chat__item__user__text__desc__time">{createdTime(item.created_at)}</span>
                </p>
              </div>
            </div>
          )
        } else {
          return (
            <div key={item.id} className="chat__item__other" id="other-message">
              <img className="chat__item__other__img" alt="" src={item.user?.avatar} />
              <div className="chat__item__other__text">
                <p className="chat__item__other__text__title">{item.user?.name} {item.user?.surname}</p>
                <p className="chat__item__other__text__desc">
                  {item.message}
                  <span className="chat__item__other__text__desc__time">{createdTime(item.created_at)}</span>
                </p>
              </div>
            </div>
          )
        }  
      })}
    </div>
  );
};

export { Chat };
