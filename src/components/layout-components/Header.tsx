import { ChatText } from "react-bootstrap-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <p>
          <ChatText className="header__inner__icon"/>
        </p>
        <p className="header__inner__title">
          Great Project
        </p>
      </div>
    </div>
  );
};

export { Header };