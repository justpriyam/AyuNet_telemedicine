// app/api/register/doctor/route.ts
import bcrypt from 'bcryptjs' 
import { query } from '@/lib/db' // Ensure the path to your database utility is correct

export async function POST(request: Request) {
  try {
    const { name, email, password, specialization } = await request.json()

    // 1. Validate input
    if (!name || !email || !password || !specialization) {
      return new Response(
        JSON.stringify({ message: 'All fields (Name, Email, Password, Specialization) are required.' }), 
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return new Response(
        JSON.stringify({ message: 'Password must be at least 6 characters long.' }), 
        { status: 400 }
      )
    }

    // 2. Check if doctor already exists
    let existingUsers: any
    try {
      existingUsers = await query(
        'SELECT id FROM doctors WHERE email = ?',
        [email]
      )
    } catch (dbError) {
      console.error('Doctor Registration Database query failed:', dbError)
      return new Response(
        JSON.stringify({ message: 'Database error. Please try again later.' }), 
        { status: 500 }
      )
    }

    if (existingUsers.length > 0) {
      return new Response(
        JSON.stringify({ message: 'Email already registered. Please login.' }), 
        { status: 409 }
      )
    }

    // 3. Hash the password
    let passwordHash: string
    try {
      passwordHash = await bcrypt.hash(password, 10)
    } catch (hashError) {
      console.error('Password hashing failed:', hashError)
      return new Response(
        JSON.stringify({ message: 'Error processing password.' }), 
        { status: 500 }
      )
    }

    // 4. Insert new doctor into database
    try {
      const result: any = await query(
        'INSERT INTO doctors (name, email, password_hash, specialization) VALUES (?, ?, ?, ?)',
        [name, email, passwordHash, specialization]
      )

      console.log('Doctor registered successfully:', result.insertId)

      return new Response(
        JSON.stringify({
          message: 'Registration successful! You can now log in.',
          userId: result.insertId
        }),
        { status: 201 }
      )
    } catch (insertError) {
      console.error('Doctor Registration Database insert failed:', insertError)
      return new Response(
        JSON.stringify({ message: 'Registration failed. Please try again.' }), 
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Doctor Registration API Error:', error)
    return new Response(
      JSON.stringify({ 
        message: 'Internal Server Error'
      }), 
      { status: 500 }
    )
  }
}