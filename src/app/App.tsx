import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux-hooks';
import { getUsers } from '../redux/user/actions';

import { MainPage } from '../pages';


const App = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);
  
  return (
    <div className="App">
      <MainPage />
    </div>
  );
};

export default App;
