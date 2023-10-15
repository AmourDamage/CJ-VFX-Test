import React from 'react';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const DeleteBtn = ({...props}) => {
  return (
    <IconButton {...props} style={{ color: 'white' }}>
      <SvgIcon component={DeleteTwoToneIcon} />
    </IconButton>
  );
};

export default DeleteBtn;
