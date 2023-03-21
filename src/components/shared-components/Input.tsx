import { Paperclip } from 'react-bootstrap-icons';

const Input = () => {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Type message" />
      <Paperclip className="search__clip"/>
      <button className="search__btn">
        Send
      </button>
    </div>
  );
};

export { Input };
