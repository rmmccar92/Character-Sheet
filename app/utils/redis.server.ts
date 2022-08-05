import * as redis from "redis";
import type { CharacterForm } from "./types.server";

const client = redis.createClient({ url: process.env.REDIS_URL });

client.on("error", (err) => console.error("Redis client error", err));

const KEY_VERSION = "1";

export const saveToRedis = async (data: CharacterForm) => {
  await client.connect();
  await client.set(`f-${KEY_VERSION}-${data.id}`, JSON.stringify(data));
  await client.disconnect();
};
