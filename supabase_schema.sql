-- Supabase Database Schema for Richa Tattva Yoga

-- 1. Bookings Table
CREATE TABLE public.bookings (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  session_type text NOT NULL,
  message text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Secure the bookings table
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the contact form / API route)
CREATE POLICY "Enable insert for anonymous users" 
  ON public.bookings 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);


-- 2. Contact Messages Table
CREATE TABLE public.contact_messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Secure the contact messages table
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the contact form / API route)
CREATE POLICY "Enable insert for anonymous users" 
  ON public.contact_messages 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);
