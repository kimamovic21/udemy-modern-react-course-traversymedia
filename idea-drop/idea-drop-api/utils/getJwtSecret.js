import dotenv from 'dotenv';

dotenv.config();

// Convert the JWT secret to a Uint8Array using TextEncoder. 
// This is required by the jose library for signing the JWT.
export const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);