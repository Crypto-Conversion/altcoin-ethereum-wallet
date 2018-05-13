/**
 * Iconomi token interface
 */
import { EthEngine } from "../eth/eth-engine";
import { TokenConfig } from "../config/tokens/tokenconfig";
import { TokenConfigMain } from "../config/tokens/tokenconfigmain";

export class IconomiTokenTestnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfig.Iconomi.contractAddress, ethEngine);
    }
}

export class IconomiTokenMainnet {
    constructor(ethEngine: EthEngine) {
        // super(TokenConfigMain.Iconomi.contractAddress, ethEngine);
    }
}