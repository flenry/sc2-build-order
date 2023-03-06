import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const buildsRouter = createTRPCRouter({
  createBuild: publicProcedure
    .input(
      z.object({
        matchUp: z.string(),
        build: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // TODO: save to the database

      const build = await ctx.prisma.buildOrder.create({
        data: {
          ...input,
        },
      });
      return build;
    }),
});
