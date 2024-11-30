import { useContext, useState } from 'react';
import logo from '../assets/icons/logo.svg'
import moon from '../assets/icons/moon.svg'
import ring from '../assets/icons/ring.svg'
import shoppingCart from '../assets/icons/shopping-cart.svg'
import CartDetails from './Cine/CartDetails';
import { MovieContext } from '../context';
const Header = () => {

  const [showCart, setShowCart] = useState(false);

  // useContext 
  const {cartData} = useContext(MovieContext);


  const handleCartShow=()=>{
    setShowCart(true)
  }


  return (
    <header>
      {
        showCart && <CartDetails
        handleCloseCart={()=> setShowCart(false)}
        ></CartDetails>
      }
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="Logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="Ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={moon}
                width="24"
                height="24"
                alt="Moon"
              />
            </a>
          </li>
          <li>
            <a
            onClick={handleCartShow}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={shoppingCart}
                width="24"
                height="24"
                alt="SpCart"
              />
              {
                cartData.length > 0 && (
                  <span className='rounded-full absolute top-[-12px] left-[28px] bg-primary text-white text-center p-2 w-[30px] h-[30px]'>
                    {cartData.length}
                  </span>
                )
              }
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
