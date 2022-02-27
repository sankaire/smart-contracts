import { ethers } from 'ethers';

const getEth = () =>{
    //@ts-ignore
    const eth = window.ethereum
    if(!eth){
        throw console.error("error");
    }
}

const hasAccount = async () =>{
    const eth = getEth()
    const account = await eth.request({method:"eth_accounts"}) as string[]
    return account && account.length
}