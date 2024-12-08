import React, { useState, useEffect, useRef } from 'react';
import {useTheme} from '../Context/ThemeContext';
import { Sun, Moon, } from 'lucide-react';
import Logo from '../assets/logo.png';
import {  useAccount } from 'wagmi'
import { WalletOptions } from './walletOptions';
import { Account } from './account';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();


  function ConnectWallet() {
    const { isConnected } = useAccount()
    if (isConnected) return <Account />
    return <WalletOptions />
  }
  

  return (
    <div className="flex justify-between items-center fixed z-10 w-full p-20 py-2 bg-gray-50">
      <img src={Logo} alt="" className='w-[60px]' />

      <div className='flex'>
         <ConnectWallet />
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>
    </div>
  )

}

export default Header
