// app/api/login/patient/route.ts
import bcrypt from 'bcryptjs' 
import { query } from '@/lib/db' // Ensure the path to your database utility is correct

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // 1. Validate input
    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: 'Email and password are required.' }), 
        { status: 400 }
      )
    }

    // 2. Fetch patient from the 'patients' table
    let users: any
    try {
      users = await query(
        'SELECT id, name, email, password_hash, phone, age FROM patients WHERE email = ?',
        [email]
      )
    } catch (dbError) {
      console.error('Patient Login Database query failed:', dbError)
      return new Response(
        JSON.stringify({ message: 'Database connection error. Please check server logs.' }), 
        { status: 500 }
      )
    }

    const user = users[0]

    if (!user) {
      return new Response(
        JSON.stringify({ message: 'Invalid credentials.' }), 
        { status: 401 }
      )
    }

    // 3. Compare the password hash
    let passwordMatch: boolean
    try {
      passwordMatch = await bcrypt.compare(password, user.password_hash)
    } catch (bcryptError) {
      console.error('Bcrypt comparison failed:', bcryptError)
      return new Response(
        JSON.stringify({ message: 'Password verification error.' }), 
        { status: 500 }
      )
    }

    if (!passwordMatch) {
      return new Response(
        JSON.stringify({ message: 'Invalid credentials.' }), 
        { status: 401 }
      )
    }

    // 4. Successful Login
    return new Response(
      JSON.stringify({
        message: 'Patient login successful',
        user: { 
          id: user.id, 
          name: user.name, 
          email: user.email,
          phone: user.phone,
          age: user.age
        },
      }),
      { status: 200 }
    )
  } catch (error) {
    console.error('Patient Login API Error:', error)
    return new Response(
      JSON.stringify({ 
        message: 'Internal Server Error'
      }), 
      { status: 500 }
    )
  }
}