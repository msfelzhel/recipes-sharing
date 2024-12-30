import {initTRPC} from "@trpc/server";

const trpc = initTRPC.create();

const recipes = [
    {nick: "nick1", name: "recipes1", description: "lalalal"},
    {nick: "nick2", name: "recipes3", description: "lalalal"},
    {nick: "nick2", name: "recipes3", description: "lalalal"},
];
export const trpcRouter = trpc.router({
    getRecipes: trpc.procedure.query(() => {
        return {recipes};
    }),
});

export type TrpcRouter = typeof trpcRouter;
