import { SimplesCompiler } from "../../../SimplesCompiler.js";
import { NewsNode } from "./newsNode.js";
export class NewsSortyByNode {
    constructor() {
        NewsNode.addCompilerNode("sortBy", this);
    }
    static getInstance() {
        if (this.instance === null)
            NewsSortyByNode.instance = new NewsSortyByNode();
        return this.instance;
    }
    compile(fragHead, node, params) {
        if (node.textContent !== null) {
            const req = params["req"];
            if (req === undefined) {
                return;
            }
            req["sortBy"] = node.textContent;
        }
        else
            SimplesCompiler.reportError("No content provided to sortBy tag - content required");
    }
}
NewsSortyByNode.instance = null;
//# sourceMappingURL=newsSortByNode.js.map