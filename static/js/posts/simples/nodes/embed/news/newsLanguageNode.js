import { SimplesCompiler } from "../../../SimplesCompiler.js";
import { NewsNode } from "./newsNode.js";
export class NewsLanguageNode {
    constructor() {
        NewsNode.addCompilerNode("language", this);
    }
    static getInstance() {
        if (this.instance === null)
            NewsLanguageNode.instance = new NewsLanguageNode();
        return this.instance;
    }
    compile(fragHead, node, params) {
        if (node.textContent !== null) {
            const req = params["req"];
            if (req === undefined) {
                return;
            }
            req["language"] = node.textContent;
        }
        else
            SimplesCompiler.reportError("No content provided to language tag - content required");
    }
}
NewsLanguageNode.instance = null;
//# sourceMappingURL=newsLanguageNode.js.map