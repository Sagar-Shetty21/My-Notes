# MyNotes

A personal article publishing app built on top of Astro's blog theme with Supabase integration for dynamic content management.

## ✨ Features

- **Dynamic Blog Management**: Fetch and display articles from Supabase database
- **Admin Authentication**: Secure login system using Supabase Auth
- **Live Preview Editor**: Real-time markdown editor with preview in admin dashboard
- **Responsive Design**: Built on the beautiful Astro Paper theme
- **Fast Performance**: Powered by Astro's static site generation

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Theme**: [Astro Paper](https://github.com/satnaing/astro-paper)
- **Database**: [Supabase](https://supabase.com/)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js (v18 or higher)
- npm or yarn package manager
- A Supabase account

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
git clone https://github.com/Sagar-Shetty21/My-Notes.git
cd My-Notes
npm install
```

### 2. Supabase Project Setup

#### Create a New Supabase Project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Choose your organization
4. Fill in project details:
    - **Name**: MyNotes (or your preferred name)
    - **Database Password**: Create a strong password
    - **Region**: Choose closest to your location
5. Click "Create new project"
6. Wait for the project to be set up (usually 1-2 minutes)

#### Database Schema Setup

Navigate to the SQL Editor in your Supabase dashboard and run the following queries:

```sql
-- Create blogs table
CREATE TABLE blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  body TEXT NOT NULL,
  author VARCHAR(100) DEFAULT 'Admin',
  pubDaetime TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  modDatetime TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  featured BOOLEAN DEFAULT FALSE,
  draft BOOLEAN DEFAULT FALSE,
  tags TEXT[],
  ogImage VARCHAR(500),
  canonicalURL VARCHAR(500),
  hideEditPost BOOLEAN DEFAULT FALSE,
  timezone VARCHAR(100),
  collection VARCHAR(100)
);

-- Create RLS (Row Level Security) policies
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Policy to allow public read access to published blogs
CREATE POLICY "Public blogs are viewable by everyone" ON blogs
  FOR SELECT USING (draft = FALSE);

-- Policy to allow authenticated users to manage all blogs
CREATE POLICY "Authenticated users can manage blogs" ON blogs
  FOR ALL USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX idx_blogs_slug ON blogs(slug);
CREATE INDEX idx_blogs_pub_date ON blogs(pub_date DESC);
CREATE INDEX idx_blogs_featured ON blogs(featured) WHERE featured = TRUE;

-- Insert sample blog post
INSERT INTO blogs (title, slug, description, content, tags, featured) VALUES (
  'Welcome to MyNotes',
  'welcome-to-mynotes',
  'Your personal publishing platform is ready!',
  '# Welcome to MyNotes

This is your first blog post! You can edit this content from the admin dashboard.

## Features

- **Markdown Support**: Write in markdown and see live preview
- **Tag System**: Organize your posts with tags
- **Featured Posts**: Highlight important articles
- **Draft Mode**: Work on posts privately before publishing

## Getting Started

1. Login to the admin dashboard
2. Create your first post
3. Publish and share your thoughts with the world!

Happy writing! ✍️',
  ARRAY['welcome', 'getting-started'],
  true
);
```

#### Set up Authentication

1. In your Supabase dashboard, go to **Authentication** > **Settings**
2. Configure your site URL:
    - **Site URL**: `http://localhost:4321` (for development)
    - Add your production URL when deploying
3. (Optional) Configure additional auth providers if needed

### 3. Environment Variables

#### Get Supabase Credentials

1. In your Supabase dashboard, go to **Settings** > **API**
2. Copy the following values:
    - **Project URL** (looks like: `https://your-project-id.supabase.co`)
    - **anon public key** (starts with `eyJ`)

#### Create .env File

Create a `.env` file in your project root:

```env
# Supabase Configuration
PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Optional: Add your site URL for production
SITE_URL=http://localhost:4321
```

**Important**:

- Replace `your-project-id` with your actual Supabase project ID
- Replace `your-anon-key-here` with your actual anon key
- Never commit your `.env` file to version control
- Add `.env` to your `.gitignore` file

### 4. Run the Application

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:4321`

## 🔐 Admin Access

### First Time Login

1. Go to `/admin/login` or `/admin
2. Since this is your first time, you'll need to create an admin account:
    - Go to your Supabase dashboard
    - Navigate to **Authentication** > **Users**
    - Click "Add user"
    - Enter email and temporary password
    - The user will receive a confirmation email
3. Use these credentials to login to your admin dashboard

### Admin Dashboard Features

Once logged in, you can:

- **Create New Posts**: Use the live preview editor
- **Edit Existing Posts**: Modify any published or draft content
- **Manage Drafts**: Save work-in-progress posts
- **Set Featured Posts**: Highlight important articles
- **Organize with Tags**: Categorize your content
- **Real-time Preview**: See how your markdown renders instantly

## 📁 Project Structure

```bash
├── .astro/                     # Astro build cache
├── .github/                    # GitHub configuration (e.g., workflows)
├── .vercel/                    # Vercel deployment config
├── dist/                       # Production build output
├── node_modules/               # Project dependencies
├── public/                     # Static assets
├── scripts/
│   └── syncFromSupabase.ts     # Script to sync data from Supabase
├── src/
│   ├── assets/                 # Static assets used in components/pages
│   ├── components/             # Reusable UI components
│   ├── data/
│   │   └── blog/
│   │       └── my-step-by-step-development-workflow.md
│   │   └── config.ts
│   ├── layouts/                # Layout components
│   │   ├── AboutLayout.astro
│   │   ├── Layout.astro
│   │   ├── Main.astro
│   │   └── PostDetails.astro
│   ├── lib/
│   │   └── supabaseClient.ts   # Supabase client setup
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── articles/
│   │   │   │   └── index.astro
│   │   │   ├── login/
│   │   │   │   └── index.astro
│   │   │   └── manage/
│   │   │       ├── index.astro
│   │   │       └── settings/
│   │   │           └── index.astro
│   │   ├── api/
│   │   │   ├── blog-files.ts
│   │   │   └── create-blog.ts
│   │   ├── archives/
│   │   ├── posts/
│   │   ├── tags/
│   │   ├── 404.astro
│   │   ├── about.md
│   │   ├── index.astro
│   │   ├── og.png.ts
│   │   ├── robots.txt.ts
│   │   ├── rss.xml.ts
│   │   └── search.astro
│   ├── styles/
│   │   ├── global.css
│   │   └── typography.css
│   ├── types/
│   │   └── astro.d.ts
│   └── utils/
│       ├── config.ts
│       ├── constants.ts
│       ├── content.config.ts
│       ├── middleware.ts
│       ├── transformers/
│       │   ├── generateOgImages.ts
│       │   ├── getPath.ts
│       │   ├── getPostsByGroupCondition.ts
│       │   ├── getPostsByTag.ts
│       │   ├── getSortedPosts.ts
│       │   ├── getUniqueTags.ts
│       │   ├── loadGoogleFont.ts
│       │   ├── postFilter.ts
│       │   └── slugify.ts
│       └── og-templates/
├── .env                        # Environment variables
├── .gitignore
├── astro.config.ts             # Astro config
├── tsconfig.json               # TypeScript config
├── eslint.config.js
├── Dockerfile
├── docker-compose.yml
├── README.md
├── package.json
└── pnpm-lock.yaml
```

## 🚀 Deployment

### Environment Variables for Production

When deploying, make sure to set these environment variables:

- `PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key
- `SITE_URL`: Your production domain

### Update Supabase Settings

1. In Supabase dashboard, go to **Authentication** > **Settings**
2. Update **Site URL** to your production domain
3. Add your production domain to **Redirect URLs**

## 🛡️ Security Notes

- The anon key is safe to use in client-side code
- Row Level Security (RLS) is enabled to protect your data
- Only authenticated users can create/edit posts
- Published posts are publicly readable

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](https://claude.ai/chat/LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro Paper Theme](https://github.com/satnaing/astro-paper) by Sat Naing
- [Astro](https://astro.build/) for the amazing framework
- [Supabase](https://supabase.com/) for backend services

---

**Happy blogging with MyNotes! 🎉**
