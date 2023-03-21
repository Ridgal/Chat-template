import { Header } from '../../components/layout-components/Header';
import { Input } from '../../components/shared-components/Input';
import { Chat } from '../../components/layout-components/Chat';
import { Loader } from '../../components/shared-components/Loader';

const ChatPage = () => {
  return (
    <section className="wrapper">
      <Header />
      {/* <Loader /> */}
      <Chat />
      <Input />
    </section>
  );
};

export { ChatPage };
