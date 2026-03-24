
export class SimplesParser {

    private static trimChars: string = "\n\t";

    private static replaceAllChar(content: string, oldStr: string, newStr: string): string {
        let oldContent;
        do {
            oldContent = content;
            content = content.replace(oldStr, newStr);
        }while(oldContent !== content);
        return content;
    }

    private static trimDoubleSpaces(content: string): string {
        return this.replaceAllChar(content, "  ", " ");
    }

    private static trimTagsides(content: string): string {
        content = this.replaceAllChar(content, "> ", ">");
        content = this.replaceAllChar(content, " <", "<");
        return content;
    }

    private static trimInput(content: string): string {
        content = this.trimDoubleSpaces(content);
        content = this.trimTagsides(content);
        for(let ch of this.trimChars) {
            content = this.replaceAllChar(content, ch, "");
        }
        return content;
    }

    public static parse(content: string): Document {
        const parser: DOMParser = new DOMParser();
        content = this.trimInput(content);
        console.log(`Parsing: ${content}`);
        return parser.parseFromString(content, "text/xml");
    }
}