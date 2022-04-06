async function run(){
    const [owner, user1, user2, user3]= await hre.ethers.getSigners();
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["Charmander", "Bulbasaur", "Squirtle"],
        ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"],
    );
    await gameContract.deployed()
    console.log("From Run.js: GameContract Address:"+gameContract.address);

    
    const user1w = await gameContract.connect(user1).mintCharacterNFT(0);
    await user1w.wait()
    console.log("From Run.js: user "+user1.address+"has tokens: "+ await gameContract.nftHolderAttributes[gameContract.nftHolders[user1]])
    const user2w = await gameContract.connect(user2).mintCharacterNFT(1);
    await user2w.wait()
    console.log("From Run.js: user "+user2.address+"has tokens: "+ await gameContract.nftHolderAttributes[gameContract.nftHolders[user2]])
    const user3w = await gameContract.connect(user3).mintCharacterNFT(2);
    await user3w.wait()
    console.log("From Run.js: user "+user3.address+"has tokens: "+ await gameContract.nftHolderAttributes[gameContract.nftHolders[user3]])
    // Get the value of the NFT's URI.
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("From Run.js, TokenURI of value 1 is: "+returnedTokenUri)
}
run();