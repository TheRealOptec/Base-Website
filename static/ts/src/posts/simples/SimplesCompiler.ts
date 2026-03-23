import { SimplesParser } from './SimplesParser.js';

export class SimplesCompiler {
    public static compile(content: string): DocumentFragment {
        
        const frag: DocumentFragment = SimplesCompiler.interpretXML(
            document.createDocumentFragment(),
            SimplesParser.parse(content)
        );
        return frag;
    }
    private static interpretXML(frag: DocumentFragment, xml: Document): DocumentFragment {
        return SimplesCompiler.interpretNodeList(frag, xml.documentElement.childNodes);
    }
    private static interpretNodeList(frag: DocumentFragment, nodes : NodeListOf<ChildNode>): DocumentFragment {

        for(let node of nodes) {
            if(node.hasChildNodes()) frag = this.interpretNodeList(frag, node.childNodes);
            else console.log(node.nodeName);
        }

        return frag;
    }
}

SimplesCompiler.compile("<a><b></b><b></b><a><c></c></a></a>");
