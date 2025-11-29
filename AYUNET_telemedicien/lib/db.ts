import mysql from 'mysql2/promise'

const dbConfig = {
  host: 'localhost',
  user: 'root',       
  password: '@Alok12345',   
  database: 'health_portal_db', 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}


const pool = mysql.createPool(dbConfig)


export async function query(sql: string, values: any[] = []) {
  try {
    const [rows] = await pool.execute(sql, values)
    return rows
  } catch (error) {
    console.error("Database Query Error:", error)
    // Throw an error to be handled by the API route caller
    throw new Error('Database operation failed.')
  }
}