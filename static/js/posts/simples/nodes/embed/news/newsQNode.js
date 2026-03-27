import { SimplesCompiler } from "../../../SimplesCompiler.js";
import { NewsNode } from "./newsNode.js";
export class NewsQNode {
    constructor() {
        NewsNode.addCompilerNode("q", this);
    }
    static getInstance() {
        if (this.instance === null)
            NewsQNode.instance = new NewsQNode();
        return this.instance;
    }
    compile(fragHead, node, params) {
        if (node.textContent !== null) {
            const req = params["req"];
            if (req === undefined) {
                return;
            }
            req["q"] = node.textContent;
        }
        else
            SimplesCompiler.reportError("No content provided to q tag - content required");
    }
}
NewsQNode.instance = null;
//# sourceMappingURL=newsQNode.js.map