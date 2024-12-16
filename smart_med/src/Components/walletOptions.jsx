import * as React from 'react'
import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button className="px-6 py-2 border border-blue-400 text-blue-600 rounded-full hover:bg-blue-100 transition" key={connector.uid} onClick={() => connect({ connector })}>
      connect wallet
    </button>
  ))
}