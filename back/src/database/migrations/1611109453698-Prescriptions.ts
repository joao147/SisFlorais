import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Prescriptions1611109453698 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Prescriptions',
      columns:[
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'prescription',
          type: 'character',
          length: '20'
        },
        {
          name: 'product',
          type: 'character',
          length: '30'
        },
        {
          name: 'date',
          type: 'date'
        },
        {
          name: 'treatmentsId',
          type: 'int'
        }
      ],
      foreignKeys:[
        {
          columnNames: ['treatmentsId'],
          referencedTableName: 'Treatments',
          referencedColumnNames: ['id']
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Prescriptions')
  }

}
