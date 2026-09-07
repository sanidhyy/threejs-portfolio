<a name="readme-top"></a>

# Modern UI/UX Portfolio using React and Three.js

![Modern UI/UX Portfolio using React and Three.js](/.github/images/img_main.png "Modern UI/UX Portfolio using React and Three.js")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/threejs-portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/threejs-portfolio/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/threejs-portfolio/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/threejs-portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/threejs-portfolio/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/threejs-portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/threejs-portfolio/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/threejs-portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/threejs-portfolio/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/threejs-portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/threejs-portfolio/pulls "GitHub pull requests")
[![Netlify Status](https://api.netlify.com/api/v1/badges/8c478bd6-ce9e-4d39-882e-a064a715cbd1/deploy-status)](https://portfolio-3js.netlify.app/ "Netlify Status")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Netlify](#page_with_curl-deploy-on-netlify)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

<!--- FOLDER_STRUCTURE_START --->
```bash
threejs-portfolio/
  |- netlify/
    |-- functions/
  |- public/
  |- src/
    |-- components/
      |--- Button.tsx
      |--- CanvasLoader.tsx
      |--- Cube.tsx
      |--- DemoComputer.tsx
      |--- Developer.tsx
      |--- HackerRoom.tsx
      |--- HeroCamera.tsx
      |--- ReactLogo.tsx
      |--- Rings.tsx
      |--- Target.tsx
    |-- constants/
      |--- index.ts
    |-- lib/
      |--- contact.ts
      |--- utils.ts
    |-- sections/
      |--- About.tsx
      |--- Clients.tsx
      |--- Contact.tsx
      |--- Experience.tsx
      |--- Footer.tsx
      |--- Hero.tsx
      |--- Navbar.tsx
      |--- Projects.tsx
    |-- App.tsx
    |-- index.css
    |-- main.tsx
    |-- vite-env.d.ts
  |- .env.example
  |- .env/.env.local
  |- .gitignore
  |- .prettierrc
  |- eslint.config.js
  |- index.html
  |- netlify.toml
  |- package.json
  |- pnpm-lock.yaml
  |- pnpm-workspace.yaml
  |- tsconfig.app.json
  |- tsconfig.json
  |- tsconfig.node.json
  |- vite.config.ts
```
<!--- FOLDER_STRUCTURE_END --->

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in **root** directory.
4. Contents of `.env`:

```env
# resend
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
RESEND_FROM_EMAIL="Your Name <me@example.com>"
CONTACT_TO_EMAIL="contact@example.com"
CONTACT_SITE_URL="https://portfolio-3js.netlify.app"
RESEND_TEMPLATE_CONTACT_USER="contact-thank-you"
RESEND_TEMPLATE_CONTACT_ADMIN="contact-admin"

# google recaptcha v3
VITE_RECAPTCHA_SITE_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
RECAPTCHA_SECRET_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
RECAPTCHA_MIN_SCORE="0.5"
```

5. Create an account at [Resend](https://resend.com "Resend") and [add + verify a sending domain](https://resend.com/domains "Resend domains").

6. Create an API key at [Resend API Keys](https://resend.com/api-keys "Resend API keys") with **Sending access**. Copy it to `RESEND_API_KEY`.

7. Set `RESEND_FROM_EMAIL` to an address on that verified domain. Set `CONTACT_TO_EMAIL` to the inbox that should receive new contact notifications. Set `CONTACT_SITE_URL` to your site's public URL (no trailing slash).

8. In [Resend Templates](https://resend.com/templates "Resend templates"), create **two** templates and **Publish** each.

   **Template 1 — thank you to the user**
   - Name: `contact-thank-you`
   - Variables: `USER_NAME`, `USER_MESSAGE`, `SITE_URL`

   **Template 2 — new message to admin**
   - Name: `contact-admin`
   - Variables: `USER_NAME`, `USER_EMAIL`, `USER_MESSAGE`, `SITE_URL`

   Copy each template's alias into `RESEND_TEMPLATE_CONTACT_USER` and `RESEND_TEMPLATE_CONTACT_ADMIN`.

9. Create a [Google reCAPTCHA v3](https://www.google.com/recaptcha/admin/create "Google reCAPTCHA") project. Choose **Score based (v3)**, add your production domain(s) **and** `localhost`, then copy the **Site key** to `VITE_RECAPTCHA_SITE_KEY` and the **Secret key** to `RECAPTCHA_SECRET_KEY`.

10. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `pnpm install --legacy-peer-deps`.

11. Now the app is fully configured 👍 and you can start it with `npm run dev` or `pnpm dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

### :raising_hand: Need Help?

If you run into issues during installation or setup:

- **GitHub Discussions** — [Open a Q&A discussion](https://github.com/sanidhyy/threejs-portfolio/discussions/new?category=q-a) for setup and troubleshooting help.
- **Email** — [sanidhyyy@gmail.com](mailto:sanidhyyy@gmail.com)
- **Discord** — `@sanidhyy`

## :camera: Screenshots

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Showcase your work](/.github/images/img2.png "Showcase your work")

![Testimonials section](/.github/images/img3.png "Testimonials section")

![Experience section](/.github/images/img4.png "Experience section")

![Working contact form](/.github/images/img5.png "Working contact form")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Vite JS](https://skillicons.dev/icons?i=vite "Vite JS")](https://vitejs.dev/ "Vite JS") [![Three JS](https://skillicons.dev/icons?i=threejs "Three JS")](https://threejs.org/ "Three JS") [![Javascript](https://skillicons.dev/icons?i=js "Javascript")](https://developer.mozilla.org/en-US/docs/Web/JavaScript "Javascript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Netlify](https://skillicons.dev/icons?i=netlify "Netlify")](https://netlify.app/ "Netlify")

## :wrench: Stats

[![Stats for Threejs portfolio](/.github/images/stats.svg "Stats for Threejs portfolio")](https://pagespeed.web.dev/analysis?url=https://portfolio-3js.netlify.app/ "Stats for Threejs portfolio")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in Threejs portfolio.

<!--- DEPENDENCIES_START --->
- [@eslint/js](https://www.npmjs.com/package/@eslint/js): ^10.0.1
- [@gsap/react](https://www.npmjs.com/package/@gsap/react): ^2.1.2
- [@netlify/functions](https://www.npmjs.com/package/@netlify/functions): ^6.0.0
- [@netlify/vite-plugin](https://www.npmjs.com/package/@netlify/vite-plugin): ^3.0.1
- [@react-three/drei](https://www.npmjs.com/package/@react-three/drei): ^10.4.4
- [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber): ^9.7.0
- [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite): ^4.3.3
- [@types/node](https://www.npmjs.com/package/@types/node): ^26.4.1
- [@types/react](https://www.npmjs.com/package/@types/react): ^19.2.18
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^19.2.5
- [@types/three](https://www.npmjs.com/package/@types/three): ^0.185.4
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): ^6.0.1
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.1
- [eslint](https://www.npmjs.com/package/eslint): ^10.9.1
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): ^7.37.5
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ^7.0.0
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): ^0.5.6
- [globals](https://www.npmjs.com/package/globals): ^17.12.0
- [gsap](https://www.npmjs.com/package/gsap): ^3.13.0
- [leva](https://www.npmjs.com/package/leva): ^0.10.0
- [maath](https://www.npmjs.com/package/maath): ^0.10.8
- [prettier](https://www.npmjs.com/package/prettier): ^3.6.2
- [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss): ^0.8.1
- [react](https://www.npmjs.com/package/react): ^19.2.8
- [react-dom](https://www.npmjs.com/package/react-dom): ^19.2.8
- [react-globe.gl](https://www.npmjs.com/package/react-globe.gl): ^2.34.0
- [react-google-recaptcha-v3](https://www.npmjs.com/package/react-google-recaptcha-v3): ^1.11.0
- [react-responsive](https://www.npmjs.com/package/react-responsive): ^10.0.1
- [resend](https://www.npmjs.com/package/resend): ^6.24.0
- [sonner](https://www.npmjs.com/package/sonner): ^2.0.6
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^3.3.1
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^4.3.3
- [three](https://www.npmjs.com/package/three): 0.185.1
- [three-stdlib](https://www.npmjs.com/package/three-stdlib): ^2.36.1
- [typescript](https://www.npmjs.com/package/typescript): ^6.0.3
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint): ^8.68.0
- [vite](https://www.npmjs.com/package/vite): ^8.0.0

<!--- DEPENDENCIES_END --->

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![Follow Me](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Tweet about this project](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Check+out+this+amazing+app:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fthreejs-portfolio "Tweet about this project")

## :books: Learn More

To deepen your understanding of React.js and Netlify, explore the following resources:

- [React.js Documentation](https://reactjs.org/docs) - delve into React.js features, concepts, and API.
- [React Official Tutorial](https://reactjs.org/tutorial) - an interactive tutorial to get hands-on experience with React.

For Netlify-specific information:

- [Netlify Documentation](https://docs.netlify.com) - learn about Netlify's features, deployment options, and more.
- [Getting Started with Netlify and React](https://docs.netlify.com/frameworks/react) - a guide on deploying React applications on Netlify.

You're encouraged to contribute and provide feedback on [Netlify's GitHub repository](https://github.com/netlify/netlify).

## :page_with_curl: Deploy on Netlify

The simplest way to deploy your React.js app is to use the [Netlify Platform](https://app.netlify.com/start) - a powerful platform for modern web projects.

Explore the [Netlify deployment documentation](https://docs.netlify.com/site-deploys/create-deploys) for step-by-step instructions on deploying your React.js app on Netlify.

Happy coding, and feel free to share your thoughts and improvements with the [Netlify community](https://community.netlify.com)!

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/threejs-portfolio&Timeline">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/threejs-portfolio&type=Timeline&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/threejs-portfolio&type=Timeline" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/threejs-portfolio&type=Timeline" />
</picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
