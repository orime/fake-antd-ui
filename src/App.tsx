import React from 'react';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
