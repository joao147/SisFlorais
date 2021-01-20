import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Treatments1611109405504 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Treatments',
      columns:[
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'date',
          type: 'date'
        },
        {
          name: 'avaliation',
          type: 'character',
          length: '20'
        },
        {
          name: 'peopleId',
          type: 'int'
        }
      ],
      foreignKeys:[
        {
          columnNames: ['peopleId'],
          referencedTableName: 'People',
          referencedColumnNames: ['id']
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Treatments')
  }

}
