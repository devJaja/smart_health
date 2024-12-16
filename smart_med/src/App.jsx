import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './Components/Hero';
import Header from './Components/Header';
import { ThemeProvider } from './Context/ThemeContext';
import PatientForm from './Components/PatientForm'
import { WagmiProvider, useAccount } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PatientDashboard from "./Components/PatientDashboard";
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
      <ThemeProvider >
        <div className="App noise dark:bg-[#131316] bg-[#fafafa] flex flex-col min-h-screen">
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}> 
              <Router>
                <Header/>
                <main>
                  <Routes>
                    <Route path="/" element={<Hero/>} />
                    <Route path="/about" element={<h1>PatientDashboard</h1>} />
                    <Route path="/patient-form" element={<PatientForm />} /> 
                    <Route path="/patient-dashboard" element={<PatientDashboard />} />
                  </Routes> 
                </main>
              </Router> 
              <ConnectWallet />
            </QueryClientProvider> 
          </WagmiProvider>
        </div>
      </ThemeProvider>
    
    </>
  )
}

export default App
