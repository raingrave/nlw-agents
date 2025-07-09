import { fastifyCors } from "@fastify/cors";
import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env.ts";
import { questionsRoute } from "./http/routes/questions.ts";
import { roomsRoute } from "./http/routes/rooms.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "*",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", () => {
  return "OK";
});

app.register(roomsRoute);
app.register(questionsRoute);

app.listen({ port: env.PORT }, () => {
  // biome-ignore lint/suspicious/noConsole: only used in dev
  console.log("HTTP server running!");
});
