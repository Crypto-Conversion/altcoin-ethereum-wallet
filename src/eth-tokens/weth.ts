/**
 * WETH token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";
import {DEX} from "../eth/tokens/dex";

export class WETHTokenTestnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfig.WETH.contractAddress, ethEngine);
    }
}

export class WETHTokenMainnet extends DEX {
    constructor(ethEngine: EthEngine) {
        super(TokenConfigMain.WETH.contractAddress, ethEngine);
    }
}