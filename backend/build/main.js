"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_1 = require("./fastify/adapter");
async function main(...args) {
    const fastifyAdapter = new adapter_1.FastifyAdapter(true);
    await fastifyAdapter.init();
}
main();
//# sourceMappingURL=main.js.map