import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu({setChar}) {
  const style = {
    width: '50px',
    height: '50px',
  
  }
  const styleMenu = {
    marginLeft: '30px',
    marginTop: '30px'
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = (str) => {
    setChar(str)
    setAnchorEl(null);
  };

  return (
    <div >
      <div aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClick} style={style} ></div>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={styleMenu}
      >
        <MenuItem onClick={(event) => handleClose(event.target.id)} id='Waldo'>Waldo</MenuItem>
        <MenuItem onClick={(event) => handleClose(event.target.id)} id='Wally'>Wally</MenuItem>
        <MenuItem onClick={(event) => handleClose(event.target.id)} id='SmilingGuy'>Smiling Guy</MenuItem>
      </Menu>
    </div>
  );
}