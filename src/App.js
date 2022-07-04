import logo from "./logo.svg";
import MagicBell, {
  FloatingNotificationInbox,
} from "@magicbell/magicbell-react";
import "./App.css";

import alret from "./alert";
import { useEffect } from "react";

const MAGICBELL_API_KEY = "78f9992669147afb6986e5c1c28607a12d1efc27";

function App() {
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      console.log("permissins  ", permission);
    });
  }, []);

  const newMessageCame = () => {
    alret.playAlarm();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MagicBell
          apiKey={MAGICBELL_API_KEY}
          userEmail="nareshvadlamani@gmail.com"
          onNewNotification={newMessageCame}
        >
          {(props) => <FloatingNotificationInbox height={300} {...props} />}
        </MagicBell>
      </header>
    </div>
  );
}

export default App;
