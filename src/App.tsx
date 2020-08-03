import React from 'react';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import Button, {ButtonSize, ButtonType} from './components/Button/button'

function App() {
  return (
    <>
    <h1>这里开始测试Button</h1>
    <Button>Hello Button</Button>
    <Button btnType={ButtonType.Primary} disabled>Hello Button</Button>
    <Button btnType={ButtonType.Link} href="http://www.baidu.com">Hello Button</Button>

    <h1>这里测试Menu</h1>
    <Menu mode="vertical" defaultIndex={0} onSelect={(index) => alert(index)}>
      <MenuItem index={0}>
        Cool Link
      </MenuItem>
      <MenuItem index={1} disabled>
        Cool Link2 
      </MenuItem>
      <MenuItem index={2}>
        Cool Link3
      </MenuItem>
    </Menu>
    <h1>测试一级标题</h1>
    <h2>测试二级标题</h2>
    <h3>测试三级标题</h3>
    <code>
      const a = 12
      let b = 14
      function name(params:type) {
        
      }
    </code>
    </>
  );
}

export default App;
