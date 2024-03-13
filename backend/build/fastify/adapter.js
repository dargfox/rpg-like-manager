"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastifyAdapter = void 0;
const fastify_1 = __importDefault(require("fastify"));
class FastifyAdapter {
    logger;
    fastify;
    constructor(logger) {
        this.logger = logger;
        this.fastify = (0, fastify_1.default)({
            logger: this.logger
        });
    }
    async init() {
        try {
            await this.fastify.listen({ port: 8000, host: '0.0.0.0' });
        }
        catch (e) {
            this.fastify.log.error(e.toString());
        }
    }
    addRoute(method, path, handler) {
        return this.fastify[method](path, handler);
    }
    addGetRoute(path, handler) {
        return this.addRoute('get', path, handler);
    }
    addPatchRoute(path, handler) {
        return this.addRoute('patch', path, handler);
    }
    addPostRoute(path, handler) {
        return this.addRoute('post', path, handler);
    }
    addPutRoute(path, handler) {
        return this.addRoute('put', path, handler);
    }
    addDeleteRoute(path, handler) {
        return this.addRoute('delete', path, handler);
    }
}
exports.FastifyAdapter = FastifyAdapter;
//# sourceMappingURL=adapter.js.map