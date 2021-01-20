import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Florais1611086027300 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Florais',
      columns:[
        {
          name: 'id',
          type: 'int',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
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
        },
        {
          name: 'ml',
          type: 'int',
          default: 30
        },
        {
          name: 'type',
          type: 'character',
          length: '20'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Florais');
  }

}
