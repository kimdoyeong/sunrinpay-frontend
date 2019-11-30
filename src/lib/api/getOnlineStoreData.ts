import client from './client';

async function getOnlineStoreData(){
    const res = await client.get('/onlinestore')
    return res.data;
}

export default getOnlineStoreData;