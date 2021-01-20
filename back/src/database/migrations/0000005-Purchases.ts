import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Purchases1611086050717 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Purchases',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'purchaseDate',
          type: 'date'
        },
        {
          name: 'cost',
          type: 'decimal',
          precision: 10,
          scale: 2
        },
        {
          name: 'quantity',
          type: 'int'
        },
        {
          name: 'floraisId',
          type: 'int'
        },
        {
          name: 'generalStocksId',
          type: 'int'
        }
      ],
      foreignKeys: [
        {
          columnNames: ['floraisId'],
          referencedTableName: 'Florais',
          referencedColumnNames: ['id']
        },
        {
          columnNames: ['generalStocksId'],
          referencedTableName: 'GeneralStocks',
          referencedColumnNames: ['id']
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Purchases')
  }
}
