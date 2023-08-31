module.exports = class Data1693520384582 {
    name = 'Data1693520384582'

    async up(db) {
        await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transaction_hash" text NOT NULL, "event_name" text NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "value" numeric NOT NULL, "description" text, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d6624eacc30144ea97915fe846" ON "transfer" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_b31e4703e54f35e045bde3d769" ON "transfer" ("block_timestamp") `)
        await db.query(`CREATE INDEX "IDX_e8a057744db5ad984bbea97444" ON "transfer" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_77e127a622dc94aeb47fba01ac" ON "transfer" ("event_name") `)
        await db.query(`CREATE INDEX "IDX_be54ea276e0f665ffc38630fc0" ON "transfer" ("from") `)
        await db.query(`CREATE INDEX "IDX_4cbc37e8c3b47ded161f44c24f" ON "transfer" ("to") `)
        await db.query(`CREATE TABLE "delegate" ("id" character varying NOT NULL, "address" text NOT NULL, "balance" numeric NOT NULL, CONSTRAINT "PK_810516365b3daa9f6d6d2d4f2b7" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_eaafa33d48c79db2cb9d1ae55b" ON "delegate" ("address") `)
        await db.query(`CREATE TABLE "eth_deposit" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transaction_hash" text NOT NULL, "from" text NOT NULL, CONSTRAINT "PK_dac9243b0dd09f565f0815d216b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_52b0b70e0b96dc5b2cdd9924f5" ON "eth_deposit" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_cdb623105c3e2abbed5230df0e" ON "eth_deposit" ("block_timestamp") `)
        await db.query(`CREATE INDEX "IDX_27e9536fce4a68ad0cefad9d5c" ON "eth_deposit" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_041f1746e952f2bc57e4d9b9b7" ON "eth_deposit" ("from") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "transfer"`)
        await db.query(`DROP INDEX "public"."IDX_d6624eacc30144ea97915fe846"`)
        await db.query(`DROP INDEX "public"."IDX_b31e4703e54f35e045bde3d769"`)
        await db.query(`DROP INDEX "public"."IDX_e8a057744db5ad984bbea97444"`)
        await db.query(`DROP INDEX "public"."IDX_77e127a622dc94aeb47fba01ac"`)
        await db.query(`DROP INDEX "public"."IDX_be54ea276e0f665ffc38630fc0"`)
        await db.query(`DROP INDEX "public"."IDX_4cbc37e8c3b47ded161f44c24f"`)
        await db.query(`DROP TABLE "delegate"`)
        await db.query(`DROP INDEX "public"."IDX_eaafa33d48c79db2cb9d1ae55b"`)
        await db.query(`DROP TABLE "eth_deposit"`)
        await db.query(`DROP INDEX "public"."IDX_52b0b70e0b96dc5b2cdd9924f5"`)
        await db.query(`DROP INDEX "public"."IDX_cdb623105c3e2abbed5230df0e"`)
        await db.query(`DROP INDEX "public"."IDX_27e9536fce4a68ad0cefad9d5c"`)
        await db.query(`DROP INDEX "public"."IDX_041f1746e952f2bc57e4d9b9b7"`)
    }
}
