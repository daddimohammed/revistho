import mongoose from 'mongoose'

async function test() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log('✅ MongoDB connected')
    process.exit(0)
  } catch (err) {
    console.error('❌ MongoDB error:', err)
    process.exit(1)
  }
}

test()
