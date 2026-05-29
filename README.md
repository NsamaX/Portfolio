# Portfolio

Personal portfolio website showcasing my infrastructure and full-stack engineering work. Built for fast, static delivery with multilingual support.

## Screenshots

![Screenshot](Portfolio.png)

## Features

- **Multilingual**: English, Thai, and Japanese — toggle instantly without page reload.
- **Contact Form**: Sends email directly via EmailJS (no backend required).
- **Dark Mode**: Persists across sessions using localStorage, respects system preference on first visit.
- **Project Gallery**: Filterable project cards with a detail sheet and image thumbnails.
- **SEO**: Full OpenGraph, Twitter card, JSON-LD Person schema, auto-generated sitemap and robots.txt.
- **Optimized Images**: Served through `next/image` with lazy loading and responsive sizing.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/NsamaX/Portfolio.git
   ```

2. **Prerequisites**
   Node.js 18+

3. **Set Up**
   ```bash
   npm install
   ```

   Copy `.env.example` to `.env.local` and fill in the values:
   ```bash
   cp .env.example .env.local
   ```

   | Variable | Description |
   |---|---|
   | `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
   | `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
   | `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |
   | `NEXT_PUBLIC_SITE_URL` | Production URL (for SEO metadata) |

4. **Run**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

   For production:
   ```bash
   npm run build && npm start
   ```

## License

This project is licensed under the **MIT License**.
