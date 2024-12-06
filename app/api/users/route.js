import connectDb from '@/app/_lib/connectDB';
import User from '@/app/_lib/models/user'
import { NextResponse } from 'next/server';

export async function GET() {
    await connectDb();
    try {
        const users = await User.find();
        return NextResponse.json({
            data: users
        })
    } catch (error) {
        return NextResponse.json({
            message: 'Error fetching posts'
        })
    }
}


