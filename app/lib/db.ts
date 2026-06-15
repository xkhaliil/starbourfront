import { PrismaClient as ControlPrismaClient } from "../generated/control";
import { PrismaClient as ShardPrismaClient } from "../generated/shard";

const globalForDb = globalThis as typeof globalThis & {
  controlDb?: ControlPrismaClient;
  shardDbs?: ShardPrismaClient[];
};

export function getControlDb() {
  if (!globalForDb.controlDb) {
    globalForDb.controlDb = new ControlPrismaClient({
      datasourceUrl: getRequiredEnv("CONTROL_DATABASE_URL"),
    });
  }

  return globalForDb.controlDb;
}

export function getShardCount() {
  return getShardDbs().length;
}

export function getShardDb(shardIndex: number) {
  return getShardDbs()[shardIndex];
}

function getShardDbs() {
  if (!globalForDb.shardDbs) {
    const urls = getRequiredEnv("SHARD_DATABASE_URLS")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);

    if (urls.length < 2) {
      throw new Error("Set SHARD_DATABASE_URLS with at least 2 Postgres shards.");
    }

    globalForDb.shardDbs = urls.map(
      (datasourceUrl) =>
        new ShardPrismaClient({
          datasourceUrl,
        }),
    );
  }

  return globalForDb.shardDbs;
}

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}
