// app/api/register/pharmacist/route.ts
import bcrypt from 'bcryptjs' 
import { query } from '@/lib/db' 

export async function POST(request: Request) {
  try {
    const { name, email, password, pharmacyName, licenseNumber } = await request.json()

    // 1. Validate input
    if (!name || !email || !password || !pharmacyName || !licenseNumber) {
      return new Response(
        JSON.stringify({ message: 'All fields are required.' }), 
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return new Response(
        JSON.stringify({ message: 'Password must be at least 6 characters long.' }), 
        { status: 400 }
      )
    }

    console.log('Registration attempt for email:', email)

    // 2. Check if user already exists
    let existingUsers: any
    try {
      existingUsers = await query(
        'SELECT id FROM pharmacists WHERE email = ?',
        [email]
      )
    } catch (dbError) {
      console.error('Database query failed:', dbError)
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

    // 4. Insert new pharmacist into database
    try {
      const result: any = await query(
        'INSERT INTO pharmacists (name, email, password_hash, pharmacy_name, license_number) VALUES (?, ?, ?, ?, ?)',
        [name, email, passwordHash, pharmacyName, licenseNumber]
      )

      console.log('Pharmacist registered successfully:', result.insertId)

      return new Response(
        JSON.stringify({
          message: 'Registration successful!',
          userId: result.insertId
        }),
        { status: 201 }
      )
    } catch (insertError) {
      console.error('Database insert failed:', insertError)
      return new Response(
        JSON.stringify({ message: 'Registration failed. Please try again.' }), 
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Pharmacist Registration API Error:', error)
    return new Response(
      JSON.stringify({ 
        message: 'Internal Server Error',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      }), 
      { status: 500 }
    )
  }
}