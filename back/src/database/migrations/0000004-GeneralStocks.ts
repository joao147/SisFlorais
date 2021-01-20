import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class GeneralStocks1611086039869 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'GeneralStocks',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'character',
          length: '100'
        },
        {
          name: 'quantity',
          type: 'int',
          unsigned: true
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('GeneralStocks');
  }

}
