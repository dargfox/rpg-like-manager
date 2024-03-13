import Fastify, { RouteHandlerMethod, FastifyInstance } from 'fastify';

export class FastifyAdapter {
    protected fastify: FastifyInstance;
    constructor (
        protected logger: boolean,
    ) {
        this.fastify = Fastify({
            logger: this.logger
        });
    }

    async init() {
        try {
            await this.fastify.listen({port: 8000, host: '0.0.0.0'});   
        } catch(e: any) {
            this.fastify.log.error(e.toString());
        }
    }

    private addRoute(method: string, path: string, handler: RouteHandlerMethod): FastifyInstance {
        return this.fastify[method](path, handler);
    }

    public addGetRoute(path: string, handler: RouteHandlerMethod): FastifyInstance {
        return this.addRoute('get', path, handler);
    }
    public addPatchRoute(path: string, handler: RouteHandlerMethod): FastifyInstance {
        return this.addRoute('patch', path, handler);
    }
    public addPostRoute(path: string, handler: RouteHandlerMethod): FastifyInstance {
        return this.addRoute('post', path, handler);
    }
    public addPutRoute(path: string, handler: RouteHandlerMethod): FastifyInstance {
        return this.addRoute('put', path, handler);
    }
    public addDeleteRoute(path: string, handler: RouteHandlerMethod): FastifyInstance {
        return this.addRoute('delete', path, handler);
    }
}