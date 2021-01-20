import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Essences1611109462242 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Essences',
      columns:[
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'drops',
          type: 'int'
        },
        {
          name: 'floraisId',
          type: 'int'
        },
        {
          name: 'prescriptionsId',
          type: 'int'
        }
      ],
      foreignKeys:[
        {
          columnNames: ['floraisId'],
          referencedTableName: 'Florais',
          referencedColumnNames: ['id']
        },
        {
          columnNames: ['prescriptionsId'],
          referencedTableName: 'Prescriptions',
          referencedColumnNames: ['id']
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Essences')
  }

}
