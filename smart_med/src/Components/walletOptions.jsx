import * as React from 'react'
import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button className="px-6 py-2 border border-red-400 text-red-600 rounded-full hover:bg-red-100 transition" key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}