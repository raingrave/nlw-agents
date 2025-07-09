import { desc, eq } from "drizzle-orm";
import type { FastifyPluginCallback } from "fastify";
import z from "zod/v4";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

export const questionsRoute: FastifyPluginCallback = (app) => {
  app.get(
    "/rooms/:id/questions",
    {
      schema: {
        params: z.object({
          id: z.string(),
        }),
      },
    },
    async (request) => {
      const { id } = request.params;

      const results = await db
        .select({
          id: schema.questions.id,
          question: schema.questions.question,
          answer: schema.questions.answer,
          created_at: schema.questions.createdAt,
        })
        .from(schema.questions)
        .where(eq(schema.questions.roomId, id))
        .orderBy(desc(schema.questions.createdAt));
      return results;
    }
  );

  app.post(
    "/rooms/:id/questions",
    {
      schema: {
        params: z.object({
          id: z.string(),
        }),
        body: z.object({
          question: z.string().min(1),
        }),
      },
    },
    async (request, reply) => {
      const { id } = request.params;
      const { question } = request.body;

      const result = await db
        .insert(schema.questions)
        .values({
          roomId: id,
          question,
        })
        .returning();

      return reply.status(201).send(result[0]);
    }
  );
};
