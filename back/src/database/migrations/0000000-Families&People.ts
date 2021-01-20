import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Families1611083700560 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Families',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'keyPerson',
          type: 'character',
          length: '100'
        }
      ]
    }));

    await queryRunner.createTable(new Table({
      name: 'People',
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
          name: 'document',
          type: 'character',
          length: '20',
          isUnique: true
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
          name: 'indication',
          type: 'character',
          length: '100'
        },
        {
          name: 'birthDate',
          type: 'date'
        },
        {
          name: 'familiesId',
          type: 'int'
        }
      ],
      uniques:[{
        columnNames: ['document']
      }],
      foreignKeys:[{
        columnNames:['familiesId'],
        referencedTableName: 'Families',
        referencedColumnNames: ['id']
      }]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
   
    await queryRunner.dropTable('People')
    await queryRunner.dropTable('Families');
  }

}
