import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './Components/Hero';
import Header from './Components/Header';
import { ThemeProvider } from './Context/ThemeContext';
import { WagmiProvider, useAccount } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import config from '../config'; 

const queryClient = new QueryClient();
function App() {

  function ConnectWallet() {
    const { isConnected, connect } = useAccount()
    if (isConnected) return <Header />
    else return <button onClick={() => connect()}>Connect Wallet</button>
  }

  return (
    <>
      <ThemeProvider>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}> 
            <Router>
              <Header/>
              <main>
                <Routes>
                  <Route path="/" element={<Hero/>} />
                  <Route path="/about" element={<h1>About Page</h1>} />
                </Routes>  {/* Routes go here */}
              </main>
              <Hero />
            </Router> 
            <ConnectWallet />
          </QueryClientProvider> 
        </WagmiProvider>
      </ThemeProvider>
    
    </>
  )
}

export default App
