# NFTを作ってみた

[Solidity](https://docs.soliditylang.org/en/v0.8.10/)とTypeScriptと[Hardhat](https://hardhat.org/)と[nft.storage](https://nft.storage/)と[OpenZeppelin](https://openzeppelin.com/contracts/)を使って、NFTを作成して、[OpenSea](https://opensea.io/)で確認してみました。

## .envの作成
`.env` をこのリポジトリのルートに作成して、下記を入力します。

```.env
NFT_STORAGE_API_KEY = *****
METADATA_URI = https://ipfs.io/ipfs/*****/metadata.json
MATIC_TEST_URL=https://rpc-mumbai.maticvigil.com
PRIVATE_KEY_MATIC_TEST=*****
MINT_ADDRESS = 0x*****
```

## 画像とmetadata.jsonの作成・アップロード

- hoge.jpgを作成して、このリポジトリのルートに置いておきます。
- [nft.storage](https://nft.storage/)にアカウントを作成して、API KEYを、`.env` の `NFT_STORAGE_API_KEY` に書きます。
- net.storageのgithubにnode.js用の[サンプル](https://github.com/nftstorage/nft.storage/tree/main/packages/client/examples/node.js)がありますので、これを参考に、hoge.jpgをIPFSにアップして、metadata.jsonを作成し、URIを取得します。
- このリポジトリの `scripts/storage.ts` は、上記を参考にしたコードです。下記を実行することで、`storage.ts` が実行されます。

```shell
> npx hardhat run scripts/storage.ts
```

- 実行後に、`https://ipfs.io/ipfs/****/metadata.json` というURLが表示されますので、`.env` の `METADATA_URI` にそのURLをコピペします。

## NFTコントラクトの作成
- コントラクトは、[ここ](https://docs.openzeppelin.com/contracts/4.x/erc721)にあるコードをほぼコピペしました。
- `ERC721URIStorage` だと、mint時にtokenURIを個別に指定できますので、ちょうどよいかなと思いました。
- このリポジトリの `contracts/NftStorage.sol` になります。

## networkの設定
- 今回は、Polygonのテストネット（mumbai）にデプロイしてみました。
- `hardhat.config.ts`でnetworkの設定ができます。Polygonの設定は[ここ](https://docs.polygon.technology/docs/develop/hardhat/)が参考になります。
- URLとprivate keyが必要なので、`.env`に書いておきます。
  - URLは、下記のように `MATIC_TEST_URL` に書きます。
  - プライベートキーはMetaMaskから取得したりして、下記のように、 `PRIVATE_KEY_MATIC_TEST` に書きます。
  - また、アカウントにはmumbaiのmaticが必要です。ない場合は、[ここ](https://faucet.polygon.technology/)から貰えます。

```.env
MATIC_TEST_URL=https://rpc-mumbai.maticvigil.com
PRIVATE_KEY_MATIC_TEST=*****
```

## コントラクトのデプロイとmint

- mint時にNFTを送信するアドレスを、`.env`の`MINT_ADDRESS`に書きます。
- 今回は、`test/deploy-nft-and-mint-test.ts`でデプロイとmintを一緒に実行してみました。
- 下記コマンドを実行すると、Polygonのmumbaiにコントラクトがデプロイされて、その後mintされます。

```shell
> npx hardhat test --network mumbai
```

- [OpenSeaのテストネット](https://testnets.opensea.io/)でNFTを送信したアカウントでログインすると、NFTが表示されました。