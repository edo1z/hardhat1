import { NFTStorage, File } from 'nft.storage';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const token = process.env.NFT_STORAGE_API_KEY;
if (token === undefined) {
  throw new Error('Please set NFT Storage API Key.');
}
const client = new NFTStorage({ token });

const main = async () => {
  try {
    const fileName = 'hoge.jpg';
    const buf = fs.readFileSync(fileName);
    const file = new File([buf], fileName, { type: 'image/jpg' });
    const metadata = await client.store({
      name: 'hoge.jpg',
      description: 'It is the hoge.jpg.',
      image: file
    });
    const url = new URL(metadata.url);
    const jsonUrl = `https://${url.hostname}.ipfs.dweb.link${url.pathname}`;
    console.log(jsonUrl);
  } catch (err) {
    console.log(err);
  }
};

main();
