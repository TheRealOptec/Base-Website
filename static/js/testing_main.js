import { SimplesCompiler } from './posts/simples/SimplesCompiler.js';
import {} from './posts/simples/NodeInit.js'; // Initialise compiler nodes
const frag = SimplesCompiler.compile(`
<simples>
    <p>
        Testing, testing, 123
        <p>Inside!</p>
    </p>
    <p>
        Ourside!
    </p>
</simples>
`);
document.body.appendChild(frag);
//# sourceMappingURL=testing_main.js.map