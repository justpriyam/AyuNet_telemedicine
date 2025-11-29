// app/api/login/pharmacist/route.ts
import bcrypt from 'bcryptjs' 
import { query } from '@/lib/db' 

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json()
    const { email, password } = body

    console.log('Login attempt for email:', email)

    // Validate input
    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: 'Email and password are required.' }), 
        { status: 400 }
      )
    }

    // 1. Fetch pharmacist from the 'pharmacists' table
    let users: any
    try {
      users = await query(
        'SELECT id, name, email, password_hash, pharmacy_name, license_number FROM pharmacists WHERE email = ?',
        [email]
      )
      console.log('Query executed, found users:', users?.length || 0)
    } catch (dbError) {
      console.error('Database query failed:', dbError)
      return new Response(
        JSON.stringify({ 
          message: 'Database connection error. Please check server logs.',
          error: process.env.NODE_ENV === 'development' ? String(dbError) : undefined
        }), 
        { status: 500 }
      )
    }

    const user = users[0]

    if (!user) {
      console.log('No user found with email:', email)
      return new Response(
        JSON.stringify({ message: 'Invalid credentials.' }), 
        { status: 401 }
      )
    }

    // Check if password_hash exists
    if (!user.password_hash) {
      console.error('User found but no password_hash in database')
      return new Response(
        JSON.stringify({ message: 'Account configuration error. Contact support.' }), 
        { status: 500 }
      )
    }

    // 2. Compare the password hash
    let passwordMatch: boolean
    try {
      passwordMatch = await bcrypt.compare(password, user.password_hash)
      console.log('Password match result:', passwordMatch)
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

    // 3. Successful Login
    console.log('Login successful for user:', user.id)
    return new Response(
      JSON.stringify({
        message: 'Pharmacist login successful',
        user: { 
          id: user.id, 
          name: user.name, 
          email: user.email, 
          pharmacyName: user.pharmacy_name, 
          licenseNumber: user.license_number 
        },
      }),
      { status: 200 }
    )
  } catch (error) {
    console.error('Pharmacist Login API Error:', error)
    return new Response(
      JSON.stringify({ 
        message: 'Internal Server Error',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      }), 
      { status: 500 }
    )
  }
}