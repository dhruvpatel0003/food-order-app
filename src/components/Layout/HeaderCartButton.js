import { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

  const [btnIsHighLighted,setbtnIsHighLighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item)=>{
    return currentNumber + item.amount;
  },0);

  const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : " "}`;

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    // console.log("second");
    setbtnIsHighLighted(true);
    const timer = setTimeout(()=>{
      setbtnIsHighLighted(false);
    },300);

    return ()=>{
      // console.log("first");
      clearTimeout(timer);
    }

  },[items]);


  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
