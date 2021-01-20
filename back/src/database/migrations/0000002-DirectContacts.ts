import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class DirectContacts1611086006729 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'DirectContacts',
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
          name: 'contact',
          type: 'character',
          length: '20'
        },
        {
          name: 'optionalContact',
          type: 'character',
          length: '20',
          isNullable: true
        },
        {
          name: 'adress',
          type: 'character',
          length: '100'
        },
        {
          name: 'uf',
          type: 'character',
          length: '2'
        },
        {
          name: 'city',
          type: 'character',
          length: '100'
        },
        {
          name: 'peopleId',
          type: 'int'
        }
      ],
      foreignKeys:[{
        columnNames: ['peopleId'],
        referencedTableName: 'People',
        referencedColumnNames:['id']
      }]
    }))

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('DirectContacts')
  }

}
