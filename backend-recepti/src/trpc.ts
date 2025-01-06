import {initTRPC} from "@trpc/server";
import _ from 'lodash'

const trpc = initTRPC.create();

const recipes = _.times(11, (i) => ({
    nick: `nick-${i}`,
    name: `number ${i}`,
    description: `lalalaalalalaalalalalaalalal`
}))

export const trpcRouter = trpc.router({
    getRecipes: trpc.procedure.query(() => {
        return {recipes};
    }),
});

export type TrpcRouter = typeof trpcRouter;
