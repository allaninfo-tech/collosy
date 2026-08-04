const fs = require('fs');

let sql = fs.readFileSync('supabase_schema.sql', 'utf8');

// Replace CREATE TABLE with CREATE TABLE IF NOT EXISTS
sql = sql.replace(/CREATE TABLE/g, 'CREATE TABLE IF NOT EXISTS');

// Replace CREATE INDEX with CREATE INDEX IF NOT EXISTS
sql = sql.replace(/CREATE INDEX/g, 'CREATE INDEX IF NOT EXISTS');
sql = sql.replace(/CREATE UNIQUE INDEX/g, 'CREATE UNIQUE INDEX IF NOT EXISTS');

// Wrap CREATE TYPE in a DO block to ignore if it exists
const typeRegex = /CREATE TYPE ([^;]+);/g;
sql = sql.replace(typeRegex, (match, p1) => {
  return `DO $$ BEGIN
    CREATE TYPE ${p1};
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;`;
});

fs.writeFileSync('supabase_schema.sql', sql);
console.log('SQL script patched to be idempotent (IF NOT EXISTS)!');
