import React from 'react';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';

const AddBtn = ({ ...props }) => {
  return (
    <IconButton style={{ color: 'white' }} {...props}>
      <SvgIcon component={AddBoxTwoToneIcon} />
    </IconButton>
  );
};

export default AddBtn;
