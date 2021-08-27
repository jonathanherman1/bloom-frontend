import React, { useState } from 'react';

import Menu from "@material-ui/core/Menu";
import EditIcon from "@material-ui/icons/Edit";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ListItemIcon from "@material-ui/core/ListItemIcon";


const EditDeleteBtn = ({model, id, handleDelete}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return ( 
    <>
    <IconButton
        aria-controls="settings-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="settings-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={`${model}/${id}/edit`}>
          <ListItemIcon>
            <EditIcon /> Edit
          </ListItemIcon>
        </MenuItem>

        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <DeleteIcon /> Delete
          </ListItemIcon>
        </MenuItem>
      </Menu> 
     </> 
      );
}
 
export default EditDeleteBtn;