# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/3f881cf4-42e6-477e-937a-1469619b3cfc

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3f881cf4-42e6-477e-937a-1469619b3cfc) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Contact form

- Preferred: set `VITE_FORMSPREE_ID` to your Formspree form ID. The app will POST JSON to `https://formspree.io/f/<id>`.
- Alternative: set `VITE_CONTACT_ENDPOINT` to any HTTP endpoint that accepts JSON with contact and scheduling fields: `{ name, email, company?, preferredDay, preferredTimeRange, alternateSlotOne, alternateSlotTwo, alternateSlotThree?, timezone, message }`.
- Fallback: if neither is set, the form opens a `mailto:` with a prefilled message. Update the placeholder email in `src/components/ContactForm.tsx`.

## SEO

- `index.html` contains a meaningful `<title>`, `<meta name="description">`, Open Graph/Twitter tags, a canonical URL, and JSON-LD Organization schema.
- Added `public/sitemap.xml` and referenced it from `public/robots.txt`.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3f881cf4-42e6-477e-937a-1469619b3cfc) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
