import React from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartButton(props) {
  return (
    <div onClick={props.showCartItems}>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={props.cart} color="secondary">
        <ShoppingCartIcon />
        </StyledBadge>
            </IconButton>
    </div>
  )
}

export default CartButton










const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
