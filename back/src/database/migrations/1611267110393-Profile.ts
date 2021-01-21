import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Profile1611267110393 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Profile',
      columns: [
        {
          name: 'id',
          type: 'int',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'email',
          type: 'character'
        },
        {
          name: 'password',
          type: 'character'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Profile');
  }

}
