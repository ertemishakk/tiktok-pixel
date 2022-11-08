import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TikTok from '../.';

const App = () => {
  React.useEffect(() => {
    TikTok.init('123');
    TikTok.pageView();
  }, []);

  return <div></div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
