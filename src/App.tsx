import React from 'react';
import './styles/index.scss';
import Button, {ButtonType, ButtonSize} from './components/Button/button'

function App() {
  return (
    <div className="App">
      test rock-ui
      <h1>hello worle</h1>
      <h2>hello worle</h2>
      <h3>hello worle</h3>

      <Button disabled>default</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>primary</Button>
      <Button disabled btnType={ButtonType.Link}
        href="http://www.baidu.com"
      >link</Button>
    </div>
  );
}

export default App;
