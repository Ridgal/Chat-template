import { ChatPage } from "./Chat/ChatPage";
import { Sidebar } from "./Sidebar/Sidebar";

const MainPage: React.FC = () => {
  return (
    <div className="container main">
      <Sidebar />
      <ChatPage />
    </div>
  );
};

export { MainPage };