import { RouteHandlerMethod, FastifyInstance } from 'fastify';
export declare class FastifyAdapter {
    protected logger: boolean;
    protected fastify: FastifyInstance;
    constructor(logger: boolean);
    init(): Promise<void>;
    private addRoute;
    addGetRoute(path: string, handler: RouteHandlerMethod): FastifyInstance;
    addPatchRoute(path: string, handler: RouteHandlerMethod): FastifyInstance;
    addPostRoute(path: string, handler: RouteHandlerMethod): FastifyInstance;
    addPutRoute(path: string, handler: RouteHandlerMethod): FastifyInstance;
    addDeleteRoute(path: string, handler: RouteHandlerMethod): FastifyInstance;
}
