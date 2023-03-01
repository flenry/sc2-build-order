import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const buildsRouter = createTRPCRouter({
  createBuild: publicProcedure
    .input(z.object({ matchUp: z.string(), build: z.string() }))
    .mutation(async ({ input, ctx }) => {
      // TODO: save to the database

      const build = await ctx.prisma.buildOrder.create({
        data: {
          ...input,
        },
      });
      return build;
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
