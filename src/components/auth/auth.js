import { AuthProvider } from "@arcana/auth";
import { ethers } from "ethers";

const AppAddress = '6692546b5d49d040bf27779e2dcdb02f021d8865'

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