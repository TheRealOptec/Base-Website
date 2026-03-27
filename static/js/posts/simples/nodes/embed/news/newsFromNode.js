import { SimplesCompiler } from "../../../SimplesCompiler.js";
import { NewsNode } from "./newsNode.js";
export class NewsFromNode {
    constructor() {
        NewsNode.addCompilerNode("from", this);
    }
    static getInstance() {
        if (this.instance === null)
            NewsFromNode.instance = new NewsFromNode();
        return this.instance;
    }
    compile(fragHead, node, params) {
        if (node.textContent !== null) {
            const req = params["req"];
            if (req === undefined) {
                return;
            }
            req["from"] = node.textContent;
        }
        else
            SimplesCompiler.reportError("No content provided to from tag - content required");
    }
}
NewsFromNode.instance = null;
//# sourceMappingURL=newsFromNode.js.map