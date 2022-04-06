// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// NFT contract to inherit from.
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./libraries/base64.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


import "hardhat/console.sol";

// Our contract inherits from ERC721, which is the standard NFT contract!
contract MyEpicGame is ERC721 {

  event CharacterNFTMinted(address sender, uint256 tokenId, uint256 characterIndex);
  event AttackComplete(uint newBossHp, uint newPlayerHp);

  struct NFTAttributes {  
    uint characterIndex;
    string name;   
    string imageURI;
  }

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  NFTAttributes[] defaultCharacters;

  // We create a mapping from the nft's tokenId => that NFTs attributes.
  mapping(uint256 => NFTAttributes) public nftHolderAttributes;

  // A mapping from an address => the NFTs tokenId. Gives me an ez way
  // to store the owner of the NFT and reference it later.
  mapping(address => uint256) public nftHolders;

  constructor(
    string[] memory names,
    string[] memory ImageURIs

    // Below, you can also see I added some special identifier symbols for our NFT.
    // This is the name and symbol for our token, ex Ethereum and ETH. I just call mine
    // Heroes and HERO. Remember, an NFT is just a token!
  )
    ERC721("ERROR404", "ERR404")
  {
    for(uint i = 0; i < names.length; i += 1) {
      defaultCharacters.push(NFTAttributes({
        characterIndex: i,
        name: names[i],
        imageURI: ImageURIs[i]
      }));
      console.log("Done initializing");
    }

    // I increment _tokenIds here so that my first NFT has an ID of 1.
    // More on this in the lesson!
    _tokenIds.increment();
  }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        NFTAttributes memory charAttributes = nftHolderAttributes[_tokenId];

        // string memory strHp = Strings.toString(charAttributes.hp);
        // string memory strMaxHp = Strings.toString(charAttributes.maxHp);
        // string memory strAttackDamage = Strings.toString(charAttributes.attackDamage);
        // string memory strDefence = Strings.toString(charAttributes.defence);

        string memory json = Base64.encode(
            abi.encodePacked(
            '{"name": "',
            charAttributes.name,
            ' - NFT #: ',
            Strings.toString(_tokenId),
            '", "description": "This is a NFT won by mining all blocks at https://shaan.rocks ", "image": "',
            charAttributes.imageURI,
            '", }'
            )
        );

        string memory output = string(
            abi.encodePacked("data:application/json;base64,", json)
        );
        
        return output;
    }

  function mintERR404NFT(uint _characterIndex) external {
    // Get current tokenId (starts at 1 since we incremented in the constructor).
    uint256 newItemId = _tokenIds.current();

    // The magical function! Assigns the tokenId to the caller's wallet address.
    _safeMint(msg.sender, newItemId);

    // We map the tokenId => their character attributes. More on this in
    // the lesson below.
    nftHolderAttributes[newItemId] = NFTAttributes({
      characterIndex: _characterIndex,
      name: defaultCharacters[_characterIndex].name,
      imageURI: defaultCharacters[_characterIndex].imageURI
    });

    console.log("Minted NFT w/ tokenId %s and characterIndex %s", newItemId, _characterIndex);
    
    // Keep an easy way to see who owns what NFT.
    nftHolders[msg.sender] = newItemId;

    // Increment the tokenId for the next person that uses it.
    _tokenIds.increment();
    emit CharacterNFTMinted(msg.sender, newItemId, _characterIndex);
  }

  function checkIfUserHasNFT() public view returns (NFTAttributes memory) {
    // Get the tokenId of the user's character NFT
    uint256 userNftTokenId = nftHolders[msg.sender];
    // If the user has a tokenId in the map, return their character.
    if (userNftTokenId > 0) {
      return nftHolderAttributes[userNftTokenId];
    }
    // Else, return an empty character.
    else {
      NFTAttributes memory emptyStruct;
      return emptyStruct;
    }
  }
  function getAllNFTs() public view returns (NFTAttributes[] memory) {
    return defaultCharacters;
  }
}