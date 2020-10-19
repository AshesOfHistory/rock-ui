import React from 'react';
import './styles/index.scss';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
  return (
    <div className="App">
      test rock-ui
      
      <Menu defaultIndex={2} mode={"vertical"} onSelect={index => console.log(index)}>
        <MenuItem index={0}> link</MenuItem>
        <MenuItem disabled index={1}> link2</MenuItem>
        <MenuItem index={2}> link3</MenuItem>
      </Menu>

      <Button className={'custom'} onClick={(e) => {e.preventDefault(); alert(111)}}>default</Button>
      <Button disabled>default disabled</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>primary large</Button>
      <Button btnType={ButtonType.Danger
      } size={ButtonSize.Small}>danger small</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">link default</Button>
      <Button disabled btnType={ButtonType.Link}
        href="http://www.baidu.com"
      >link disabled</Button>
    </div>
  );
}

export default App;
