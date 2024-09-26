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

```bash
threejs-portfolio/
  |- public/
    |-- assets/
    |-- models/
    |-- textures/
    |-- apple-icon.png
    |-- favicon.ico
    |-- favicon1.png
    |-- favicon2.png
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
  |- .env.local.example
  |- .env.local.local
  |- .gitignore
  |- .prettierrc
  |- bun.lockb
  |- eslint-config.js
  |- index.html
  |- package.json
  |- postcss.config.js
  |- tailwind.config.js
  |- tsconfig.app.json
  |- tsconfig.json
  |- tsconfig.node.json
  |- vite.config.ts
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in **root** directory.
4. Contents of `.env.local`:

```env
# .env.local

# emailjs configuration
VITE_APP_SERVICE_ID=service_xxxxxxxxxx
VITE_APP_TEMPLATE_ID=template_xxxxxxxxxx
VITE_APP_EMAIL=<your-email-here>
VITE_APP_PUBLIC_KEY=xxxxxxxxxxxxxx
```

5. ### Service ID (Replace VITE_APP_SERVICE_ID):

- Visit [EmailJS](https://emailjs.com "EmailJS") Website.
- Log in to your account or sign up with new account.
- Navigate to the API keys or services section.
- Find and copy the Service ID associated with your account.

6. ### Template ID (Replace VITE_APP_TEMPLATE_ID):

- Access the section for email templates or integration.
- Locate the template you want to use or create a new one and copy its Template ID.

7. ### EmailJS Public Key (Replace VITE_APP_PUBLIC_KEY):

- Navigate to the dashboard or settings page.
- Look for API keys or integration settings.
- Copy the Public Key associated with your account.

![Copy public key](/.github/images/step_emailjs.png "Copy public key")

8. ### EmailJS Receiver (Replace VITE_APP_EMAIL):

- Enter the email address where you want to receive emails.
- Ensure that the chosen email address is accessible and ready to receive emails.

9. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps` or `bun install --legacy-peer-deps` to install dependencies.

10. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev` or `bun dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

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

- [@emailjs/browser](https://www.npmjs.com/package/@emailjs/browser): ^4.4.1
- [@gsap/react](https://www.npmjs.com/package/@gsap/react): ^2.1.1
- [@react-three/drei](https://www.npmjs.com/package/@react-three/drei): ^9.113.0
- [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber): ^8.17.8
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.1
- [gsap](https://www.npmjs.com/package/gsap): ^3.12.5
- [leva](https://www.npmjs.com/package/leva): ^0.9.35
- [maath](https://www.npmjs.com/package/maath): ^0.10.8
- [react](https://www.npmjs.com/package/react): ^18.3.1
- [react-dom](https://www.npmjs.com/package/react-dom): ^18.3.1
- [react-globe.gl](https://www.npmjs.com/package/react-globe.gl): ^2.27.2
- [react-responsive](https://www.npmjs.com/package/react-responsive): ^10.0.0
- [sonner](https://www.npmjs.com/package/sonner): ^1.5.0
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.5.2
- [three](https://www.npmjs.com/package/three): ^0.168.0
- [@eslint/js](https://www.npmjs.com/package/@eslint/js): ^9.9.0
- [@types/react](https://www.npmjs.com/package/@types/react): ^18.3.3
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^18.3.0
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): ^4.3.1
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): ^10.4.20
- [eslint](https://www.npmjs.com/package/eslint): ^9.9.0
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): ^7.36.1
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ^5.1.0-rc.0
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): ^0.4.9
- [globals](https://www.npmjs.com/package/globals): ^15.9.0
- [postcss](https://www.npmjs.com/package/postcss): ^8.4.47
- [prettier](https://www.npmjs.com/package/prettier): ^3.3.3
- [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss): ^0.6.8
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^3.4.13
- [typescript](https://www.npmjs.com/package/typescript): ^5.5.3
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint): ^8.0.1
- [vite](https://www.npmjs.com/package/vite): ^5.4.1

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![Follow Me](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Tweet about this project](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Check+out+this+amazing+app:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fthreejs-portfolio "Tweet about this project")
[![Subscribe to my YouTube Channel](https://img.shields.io/youtube/channel/subscribers/UCNAz_hUVBG2ZUN8TVm0bmYw)](https://www.youtube.com/@OPGAMER./?sub_confirmation=1 "Subscribe to my YouTube Channel")

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
