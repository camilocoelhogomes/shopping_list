import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationTeste31726352365925 implements MigrationInterface {
    name = 'MigrationTeste31726352365925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_85b1d05b437583ceeabe06b7b7f"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "shoppingListsShoppingListId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "shoppingListsShoppingListId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_85b1d05b437583ceeabe06b7b7f" FOREIGN KEY ("shoppingListsShoppingListId") REFERENCES "shopping_list"("shoppingListId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
