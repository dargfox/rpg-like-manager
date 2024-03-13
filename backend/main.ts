import { FastifyReply, FastifyRequest } from 'fastify';
import { FastifyAdapter } from './fastify/adapter';

async function main(...args: any[]) {
    const fastifyAdapter = new FastifyAdapter(true);
    await fastifyAdapter.init();
}

main();