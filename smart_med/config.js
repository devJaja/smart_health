import { http, createConfig } from 'wagmi';
import { sepolia, mainnet } from 'wagmi/chains';
import { metaMask} from 'wagmi/connectors';


const lisk = {
    id: 4202, // Unique chain ID
    name: 'Lisk Sepolia Testnet',
    network: 'lisk-testnet',
    nativeCurrency: {
      name: 'Lisk',
      symbol: 'LSK',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.sepolia-api.lisk.com/'], // Replace with actual Lisk Testnet RPC URL
      },
      public: {
        http: ['https://rpc.sepolia-api.lisk.com/'],
      },
    },
    blockExplorers: {
      default: { name: 'Lisk Explorer', url: 'https://sepolia-blockscout.lisk.com/' },
    },
    testnet: true,
  };

const config = createConfig({
  chains: [mainnet, sepolia, lisk],
  connectors: [
    metaMask(),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [lisk.id]: http(),
  },
})


  


export default config;