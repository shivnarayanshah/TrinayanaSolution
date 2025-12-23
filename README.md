# Trinayana Solution - Physical Precision & Digital Excellence

An Awwwards-level website for a Civil Engineering + IT Services firm, built with Next.js 16 (App Router), GSAP, and Three.js.

## Tech Stack
- **Frontend**: Next.js 16 (App Router), GSAP + ScrollTrigger, Three.js (@react-three/fiber), Tailwind CSS (v4), Framer Motion.
- **Backend**: Next.js Server Actions, MongoDB (Mongoose).
- **Authentication**: NextAuth.js (v5) with Credentials provider.
- **Forms**: Formik + Yup.
- **Scrolling**: Lenis Smooth Scroll.

## Features
- **3D Hero Scene**: Architectural grid and abstract structures for a premium engineering feel.
- **Animated Nav**: Glassmorphism sticky navbar with GSAP logo reveals.
- **Service Grids**: High-end reveal animations for Civil Engineering and IT services.
- **Contact Form**: Secure submission with database persistence and real-time validation.
- **Admin Dashboard**: Secure management of inquiries (Inquiries list, status management, deletions).
- **Custom UI**: Custom cursor, Noise overlay, and premium typography.

## Prerequisites
- Node.js 18+
- MongoDB instance (Local or Atlas)

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd trinayanasolution
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=a_secure_random_string
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

## Admin Access
- To access the Admin Dashboard, register a new user at `/register`.
- The **first registered user** will be automatically assigned the **ADMIN** role.
- Subsequent users will be assigned the default **USER** role.

## Credits
- Built by Antigravity (Advanced Agentic Coding).
