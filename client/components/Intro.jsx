const Intro = () => {
  return (
    <div className="mt-28 flex flex-col items-center justify-center gap-y-10">
      <h2 className="text-2xl font-bold">Gasless NFT Minting using Biconomy</h2>
      <div className="mt-10 flex flex-col gap-y-2 text-lg">
        <div className="font-bold">Steps:</div>
        <div>1. Select an Approach</div>
        <div>2. Connect Your Wallet</div>
        <div>
          3. Click on the Mint NFT button to Mint an NFT using gasless Meta
          Transaction using Biconomy
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-y-2 text-lg">
        <div className="text-md font-bold">
          Repository:{' '}
          <a
            href="https://github.com/adeojoemmanuel/biconomy-gasless-minting"
            target="_blank"
            className="text-blue-600"
          >
            gasless-minting
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro
