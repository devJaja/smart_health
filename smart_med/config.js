import { http, createConfig } from 'wagmi';
import { sepolia, lisk, mainnet } from 'wagmi/chains';
import { injected} from 'wagmi/connectors';


const config = createConfig({
  chains: [mainnet, sepolia, lisk],
  connectors: [
    injected(),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [lisk.id]: http(),
  },
})

export default config;