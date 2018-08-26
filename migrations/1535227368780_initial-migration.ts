import { MigrationBuilder } from 'node-pg-migrate';

export const shorthands: any = undefined;

export const up = (pgm: MigrationBuilder) => {
 pgm.createTable('checked_ips', {
  ip_address: {
    type: 'text',
    notNull: true,
    unique: true,
    primaryKey: true,
  }
 });
 pgm.addConstraint('checked_ips', 'is_valid_ip', {
   check: "ip_address ~ '^[0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}$'"
 });
 pgm.createTable('valid_ips', {
   ip_address: {
     type: 'text',
     notNull: true,
     unique: true,
     primaryKey: true,
   },
   html_title: {
     type: 'text',
     notNull: true,
     default: ''
   }
 });
 pgm.addConstraint('valid_ips', 'FK__checked_ips_ip_address__valid_ips_ip_address', {
  foreignKeys: {
    columns: 'ip_address',
    references: 'checked_ips (ip_address)'
  }
 });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropConstraint('valid_ips', 'FK__checked_ips_ip_address__valid_ips_ip_address');
  pgm.dropTable('valid_ips');
  pgm.dropConstraint('checked_ips', 'is_valid_ip');
  pgm.dropTable('checked_ips');
};
