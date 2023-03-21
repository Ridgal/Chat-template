import { ChatItemList } from '../../components/layout-components/ChatItemList';
import { getMessage } from '../../redux/chat/actions';
import { useAppDispatch } from '../../hooks/redux-hooks';

const Sidebar: React.FC = () => {

  const dispatch = useAppDispatch();

  const handleUserClick = async (userId: string) => {
    await dispatch(getMessage(userId));
  };

  return (
    <section className="sidebar">
      <div className="sidebar__header">
        <p className="sidebar__title">All chats</p>
      </div>
      <div className="sidebar__users">
        <ChatItemList onUserClick={handleUserClick} />
      </div>
    </section>
  );
};

export { Sidebar };
