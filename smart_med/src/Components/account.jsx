import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName })

  return (
    <div className='flex gap-2'>

      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && 
      <div className="px-6 py-2 border border-blue-400 text-blue-600 rounded-full hover:bg-blue-100 transition">
        {ensName
        ? `${ensName} (${address.slice(0, 6)}...${address.slice(-4)})`
        : `${address.slice(0, 6)}...${address.slice(-4)}`}
      </div>}
      <button className="px-6 py-2 border border-red-400 text-red-600 rounded-full hover:bg-red-100 transition" onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}