import { useSelectorHook } from "../../hooks/selector-hook";
import { Loader } from "../shared-components/Loader";

interface Props {
  onUserClick: (userId: string) => void;
};

const ChatItemList:React.FC<Props> = ({ onUserClick }) => {

  const { users, loading } = useSelectorHook();

  if (loading) {
    return <Loader />
  };

  return (
    <div className="chatlist" id="element">
      {users?.map((item) => {
        return (
          <div className="chatlist__inner" key={item.id} onClick={() => onUserClick(item.id)}>
            <img className="chatlist__inner__logo" src={item.avatar} alt="logo" />
            <div className="chatlist__inner__item">
              <p className="chatlist__item__title">{item.title}</p>
              <p className="chatlist__item__text">Anyways, that's my two cents plan for</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export { ChatItemList };
