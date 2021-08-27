import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Menu from "@material-ui/core/Menu";
import EditIcon from "@material-ui/icons/Edit";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const EditDeleteBtn = ({model, id, handleDelete, state, setState}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickDelete = async () => {
        await handleDelete(state, setState, id)
        history.push(`/${model}`);
    }

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
        <MenuItem component={Link} to={`/${model}/${id}/edit`}>
          <ListItemIcon>
            <EditIcon /> Edit
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClickDelete}>
          <ListItemIcon>
            <DeleteIcon /> Delete
          </ListItemIcon>
        </MenuItem>
      </Menu> 
     </> 
    );
}
 
export default EditDeleteBtn;