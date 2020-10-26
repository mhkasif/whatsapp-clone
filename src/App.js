import logo from './logo.svg';
import './App.scss';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';

function App() {
  return (
    <div className="app">

      <div className="app__body">
{/* sidebar */}
<Sidebar/>
{/* chat */}
<Chat/>
      </div>
    </div>
  );
}

export default App;
