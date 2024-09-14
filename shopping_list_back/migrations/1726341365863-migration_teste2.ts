import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationTeste21726341365863 implements MigrationInterface {
    name = 'MigrationTeste21726341365863'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shopping_list" ("shoppingListId" SERIAL NOT NULL, "name" character varying(300) NOT NULL, "description" character varying(300) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastChangedBy" character varying(300) NOT NULL, "internalComment" character varying(300), "ownerId" integer, CONSTRAINT "PK_86df90d6ea04b6ac61f71e28276" PRIMARY KEY ("shoppingListId"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "shoppingListsShoppingListId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_85b1d05b437583ceeabe06b7b7f" FOREIGN KEY ("shoppingListsShoppingListId") REFERENCES "shopping_list"("shoppingListId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shopping_list" ADD CONSTRAINT "FK_1698c99cd84960bc4b06b0e30c0" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shopping_list" DROP CONSTRAINT "FK_1698c99cd84960bc4b06b0e30c0"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_85b1d05b437583ceeabe06b7b7f"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "shoppingListsShoppingListId"`);
        await queryRunner.query(`DROP TABLE "shopping_list"`);
    }

}
