# ElectroXplore Setup Guide

## Overview
ElectroXplore is a full-featured engineering research and training platform with membership system, dynamic blog/news, and dark/light theme support.

## Features Implemented

✅ **Registration & Login System**
- Multi-field registration form with validation
- Email & Member ID login
- JWT-based authentication with HTTP-only cookies
- Protected member routes

✅ **Member Dashboard & Profile**
- Personal dashboard with stats and quick links
- Editable profile management
- Activity tracking

✅ **Dynamic Blog & News System**
- Auto-generated blog and news pages
- Individual post pages with content
- Category tags and author information
- SSG (Static Site Generation) with fallback data

✅ **Dark/Light Theme Toggle**
- System preference detection
- Persistent localStorage storage
- Real-time theme switching
- CSS variable-based implementation

✅ **Responsive Design**
- Desktop top navbar with links
- Mobile bottom sticky icon navbar
- Fully responsive across all devices

## Environment Setup

### Required Environment Variables

Create a `.env.local` file in the project root with:

```env
# Google Sheets Integration (Required for real data)
GOOGLE_SHEETS_ID=your_google_sheets_id_here
GOOGLE_SERVICE_ACCOUNT_KEY=your_base64_encoded_service_account_key

# JWT Authentication (Required)
JWT_SECRET=your_super_secret_32_plus_character_string_here
```

### Getting Google Sheets Credentials

1. **Create a Google Cloud Project**
   - Go to https://console.cloud.google.com
   - Create a new project
   - Enable the Google Sheets API

2. **Create a Service Account**
   - Go to Service Accounts in your project
   - Create a new service account
   - Download the JSON key file

3. **Encode the Key**
   ```bash
   cat /path/to/service_account_key.json | base64
   ```
   - Copy the base64 output to `GOOGLE_SERVICE_ACCOUNT_KEY`

4. **Set up your Google Sheet**
   - Create a new Google Sheet
   - Copy the sheet ID from the URL
   - Set it as `GOOGLE_SHEETS_ID`

5. **Create Required Sheets**
   - Add these sheets to your Google Sheet:
     - `Members` - Columns: MemberId, Email, FullName, Organization, AcademicLevel, StudentId, Fields, Status, DateJoined
     - `Blog` - Columns: ID, Title, Slug, Excerpt, Content, Author, Date, Category, Image
     - `News` - Columns: ID, Title, Slug, Excerpt, Content, Author, Date, Category, Image
     - `Registrations` - Columns: MemberId, Email, FullName, DateRegistered, Status

6. **Share the Sheet with Service Account**
   - Copy the service account email from the JSON key
   - Add it as an editor to your Google Sheet

## Project Structure

```
/app
  /api/member/me          # Get current user endpoint
  /register              # Registration page
  /login                 # Login page
  /member
    /dashboard           # Member dashboard
    /profile             # Member profile
  /blog
    /[slug]              # Single blog post
  /news
    /[slug]              # Single news post
  /actions
    /register.ts         # Registration server action
    /login.ts            # Login server action
    /blog.ts             # Blog/news server actions
  
/components
  /navbar.tsx            # Header with theme toggle
  /theme-provider.tsx    # Theme context provider
  /footer.tsx            # Footer with links
  
/lib
  /google-sheets.ts      # Google Sheets API client
  /jwt.ts                # JWT token utilities

/middleware.ts           # Route protection middleware
```

## Available Routes

### Public Routes
- `/` - Home page
- `/register` - Registration page
- `/login` - Member login
- `/blog` - Blog listing
- `/blog/[slug]` - Individual blog post
- `/news` - News listing
- `/news/[slug]` - Individual news post
- `/terms` - Terms & Conditions
- `/privacy` - Privacy Policy

### Protected Routes (Require Login)
- `/member/dashboard` - Member dashboard
- `/member/profile` - Member profile

## Data Flow

### Registration Process
1. User fills registration form at `/register`
2. Form validates using Zod schema
3. Server action checks for duplicate emails
4. Data is saved to Google Sheets "Members" sheet
5. Registration record created in "Registrations" sheet
6. User receives confirmation and is directed to login

### Login Process
1. User enters email and member ID at `/login`
2. Server action queries Google Sheets for matching member
3. JWT token is created and set as HTTP-only cookie
4. User is redirected to `/member/dashboard`
5. Middleware protects `/member/*` routes

### Blog/News System
- Content is fetched from Google Sheets
- Mock data is provided for development (when env vars not set)
- Posts are statically generated at build time
- Each post has: title, slug, excerpt, content, author, date, category

## Customization

### Add Blog Post
1. Open your Google Sheet
2. Go to "Blog" sheet
3. Add a row with:
   - ID: Unique identifier
   - Title: Post title
   - Slug: URL-friendly slug (e.g., "power-systems-guide")
   - Excerpt: Short summary
   - Content: Full post content
   - Author: Author name
   - Date: Publication date (YYYY-MM-DD)
   - Category: Field category (EEE, CSE, etc.)

### Customize Theme Colors
Edit `/app/globals.css`:
- Dark theme colors in `:root`
- Light theme colors in `.light` selector
- Uses OKLch color space for better color harmony

### Add New Member Fields
1. Update Google Sheets "Members" sheet columns
2. Update `registerSchema` in `/app/actions/register.ts`
3. Update `/app/member/profile/page.tsx` form fields

## Deployment

### Deploy to Vercel
```bash
# Install dependencies
pnpm install

# Deploy
vercel

# Set environment variables in Vercel dashboard
# Then redeploy
```

### Important Notes for Deployment
- Set all environment variables in Vercel project settings
- Make sure Google Service Account has access to your Sheet
- GOOGLE_SERVICE_ACCOUNT_KEY must be base64 encoded
- JWT_SECRET should be a strong random string (use `openssl rand -base64 32`)

## Testing

### Test Registration
1. Go to `/register`
2. Fill in all fields
3. Select at least one engineering field
4. Agree to terms
5. Submit (will show success with Member ID)

### Test Login
1. Go to `/login`
2. Use the email and Member ID from registration
3. Should redirect to `/member/dashboard`

### Test Blog/News
1. Go to `/blog` or `/news`
2. Click on any post to view details
3. Mock data is displayed if env vars not set

### Test Theme Toggle
1. Click the sun/moon icon in navbar
2. Page should switch between light/dark theme
3. Theme preference is saved to localStorage

## Troubleshooting

### "GOOGLE_SERVICE_ACCOUNT_KEY not set"
- This is expected in development without real Google Sheets setup
- Mock data will be used instead
- Set environment variables to use real Google Sheets

### Login not working
- Verify email and Member ID match exactly
- Check that member record exists in Google Sheets
- Clear browser cookies and try again

### Blog/News pages not loading
- Check that mock data is being used (in development)
- Verify Google Sheets permissions if using real data
- Check browser console for error details

### Theme not persisting
- Clear browser localStorage
- Check that browser allows localStorage
- Verify theme is being set in `theme-provider.tsx`

## Future Enhancements

- [ ] Email verification for registration
- [ ] Password reset functionality
- [ ] Admin dashboard for content management
- [ ] Comments on blog posts
- [ ] Search functionality
- [ ] User profiles with avatars
- [ ] Analytics tracking
- [ ] Email notifications
- [ ] Two-factor authentication
- [ ] Social login (Google, GitHub)

## Support

For issues or questions:
1. Check this guide
2. Review environment setup
3. Check browser console for errors
4. Verify Google Sheets configuration
5. Check that all dependencies are installed
