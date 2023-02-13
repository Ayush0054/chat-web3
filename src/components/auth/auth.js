import { AuthProvider } from "@arcana/auth";
import { ethers } from "ethers";


const auth  = new AuthProvider('${AppAddress}')

window.onload = async () => {
    try{
        await auth.init();

        const arcanaProvider = await auth.loginWithSocial('google')
        const provider = new ethers.provider.Web3Provider(arcanaProvider)
 
        await provider.getBlockNumber()

    }catch(err){
        console.error("Oops some error occured!")

    }
}