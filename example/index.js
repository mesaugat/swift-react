import './app.css';
import ReactLogo from './react.png';

/**
 * App Component.
 */
function App() {
  return (
    <div className="app">
      <img className="app-logo" src={ReactLogo} />
      Hello swift-react! 👋
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
