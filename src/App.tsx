import React from 'react';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Icon from './components/Icon/icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  return (
    <>
      <h3>这里开始测试Button</h3>
      <Button onClick={e => { e.preventDefault(); alert('点击了') }}>Hello Button</Button>
      <Button btnType={ButtonType.Primary} disabled>Hello Button</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">Hello Button</Button>
      <Button btnType={ButtonType.Danger} href="http://www.baidu.com">Hello Button</Button>
      <h3>这里测试Icon</h3>
      <Icon icon='coffee' size="2x" theme="danger" spin />
      <h3>这里测试横向Menu</h3>
      <Menu onSelect={(index) => console.log(index)}>
        <MenuItem>
          Cool Link
        </MenuItem>
        <MenuItem disabled>
          Cool Link2
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            Drop Down1
          </MenuItem>
          <MenuItem disabled>
            Drop Down2
          </MenuItem>
        </SubMenu>
        <MenuItem>
          Cool Link3
      </MenuItem>
      </Menu>
      <h3>这里测试纵向Menu</h3>
      <Menu mode="vertical" onSelect={(index) => console.log(index)}>
        <MenuItem>
          Cool Link
        </MenuItem>
        <MenuItem disabled>
          Cool Link2
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            Drop Down1
          </MenuItem>
          <MenuItem disabled>
            Drop Down2
          </MenuItem>
        </SubMenu>
        <MenuItem>
          Cool Link3
      </MenuItem>
      </Menu>
      <h3>测试一级标题</h3>
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
