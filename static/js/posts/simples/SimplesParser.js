export class SimplesParser {
    static replaceAllChar(content, oldStr, newStr) {
        let oldContent;
        do {
            oldContent = content;
            content = content.replace(oldStr, newStr);
        } while (oldContent !== content);
        return content;
    }
    static trimDoubleSpaces(content) {
        return this.replaceAllChar(content, "  ", " ");
    }
    static trimTagsides(content) {
        content = this.replaceAllChar(content, "> ", ">");
        content = this.replaceAllChar(content, " <", "<");
        content = this.replaceAllChar(content, " />", "/>");
        return content;
    }
    static trimInput(content) {
        content = this.trimDoubleSpaces(content);
        content = this.trimTagsides(content);
        for (let ch of this.trimChars) {
            content = this.replaceAllChar(content, ch, "");
        }
        return content;
    }
    static parse(content) {
        const parser = new DOMParser();
        content = this.trimInput(content);
        console.log(`Parsing: ${content}`);
        return parser.parseFromString(content, "text/xml");
    }
}
SimplesParser.trimChars = "\n\t";
//# sourceMappingURL=SimplesParser.js.map