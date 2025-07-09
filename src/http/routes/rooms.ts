import type { FastifyPluginCallback } from "fastify";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

export const roomsRoute: FastifyPluginCallback = (app) => {
  app.get("/rooms", async () => {
    const results = await db
      .select({
        id: schema.rooms.id,
        description: schema.rooms.description,
        created_at: schema.rooms.createdAt,
      })
      .from(schema.rooms)
      .orderBy(schema.rooms.createdAt);
    return results;
  });
};
