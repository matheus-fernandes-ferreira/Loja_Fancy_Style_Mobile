import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
    CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idCategory INTEGER NOT NULL,
    image TEXT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    price INTEGER
    )
`);
    await database.execAsync(`
    CREATE TABLE IF NOT EXISTS category(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    cover TEXT NOT NULL
    )
    `)
}

