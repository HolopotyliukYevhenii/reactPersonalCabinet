# The documentation for rideabo.de user personal cabinet

Short contest:
0. Quickly access to official documents
1. Feature-Sliced Design (FSD) in a React Project
2. Installing of project
3. References for designs
🔗 **Official FSD Docs:** [https://feature-sliced.design](https://feature-sliced.design)  
📘 **Getting Started Guide:** [https://feature-sliced.design/docs/get-started/overview](https://feature-sliced.design/docs/get-started/overview)

🧠 [Stripe Docs Overview](https://stripe.com/docs)
💳 [React Stripe.js Guide](https://stripe.com/docs/stripe-js/react)
🧩 [Stripe Elements](https://stripe.com/docs/stripe-js#elements)
🌐 [API Reference](https://stripe.com/docs/api)
🧪 [Testing with Stripe](https://stripe.com/docs/testing)

<!-- ======================================================== -->
<!-- ========================= Block 1 ====================== -->
<!-- ======================================================== -->

<!-- ==================== Block 1.1 ========================= -->


# 1 Feature-Sliced Design (FSD) in a React Project

Feature-Sliced Design (FSD) is an architectural methodology for frontend development focused on **scalability**, **modularity**, and **business-oriented separation of concerns**.

FSD is especially well-suited for **React + TypeScript** projects where code flexibility and maintainability are key.

---

### Core Principles of FSD

- **Layered structure**: Architecture is split into logical layers (entities, features, shared, pages, etc.)
- **Feature-first segmentation**: Logic is grouped around use cases and business domains.
- **Isolation of responsibility**: Each layer has a clear purpose and doesn't interfere with others.

---

### Basic Project Structure

src/
├── app/ # App initialization, configs, routing
├── pages/ # Application pages composed of widgets/features
├── widgets/ # Large UI blocks with logic (Navbar, Sidebar)
├── features/ # Self-contained features (LoginForm, AddToCart)
├── entities/ # Business entities (User, Order, Product)
├── shared/ # Shared utilities, types, styles, components
└── index.tsx


### 📦 Installed Modules – Feature-Sliced Vite Template

This table lists all the key modules that come **pre-installed** with the [Feature-Sliced Vite Template](https://github.com/feature-sliced/react-vite-template), including their purpose in the architecture.

| Category            | Package Name                 | Description / Purpose                                                  |
|---------------------|------------------------------|------------------------------------------------------------------------|
| **Core**            | `react`, `react-dom`         | React framework for building the UI                                   |
|                     | `typescript`                 | Static typing support                                                  |
| **Build Tooling**   | `vite`                       | Fast and modern frontend build tool                                   |
| **Routing**         | `react-router-dom`           | Declarative routing for React apps                                    |
| **Styling**         | `tailwindcss`                | Utility-first CSS framework                                            |
|                     | `postcss`, `autoprefixer`    | CSS post-processing and vendor prefixing                              |
|                     | `classnames`                 | Conditionally join CSS class names                                    |
| **State Management**| `zustand`                    | Lightweight global state manager                                      |
| **Linting**         | `eslint`                     | Code linting                                                           |
|                     | `eslint-config-prettier`     | Disables ESLint rules that conflict with Prettier                     |
| **Formatting**      | `prettier`                   | Code formatting                                                        |
| **Git Hooks**       | `husky`                      | Git hooks for running checks before commit                            |
|                     | `lint-staged`                | Run linters on staged files only                                      |
| **Type Definitions**| `@types/react`, `@types/node`| TypeScript type definitions                                            |

> ✅ All these packages are installed automatically when you use the template via:
> 
> ```bash
> npx degit feature-sliced/react-vite-template my-app
> cd my-app && npm install
> ```

## Suggested Additional Modules

These modules are **not pre-installed**, but commonly used alongside FSD:

| Purpose              | Recommended Package(s)          |
|----------------------|---------------------------------|
| **Form Handling**    | `react-hook-form`, `zod`        |
| **Data Fetching**    | `@tanstack/react-query`, `axios`|
| **Auth**             | `firebase`, `next-auth` (if SSR)|
| **Testing**          | `vitest`, `@testing-library/react` |
| **Mock API**         | `msw`                           |
| **Component Docs**   | `storybook`                     |








<!-- ======================================================== -->
<!-- ========================= Block 2 ====================== -->
<!-- ======================================================== -->



### Download and install Node.js into MacOS:
### 
> Download and install nvm: 
> ```url -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash```
> 
> in lieu of restarting the shell
> ``` `\. "$HOME/.nvm/nvm.sh"` ```
> Download and install Node.js:
> ```nvm install 22 ```
> Verify the Node.js version
> ``` node -v ```

### Install template  FSD

> ```px degit unordinarity/fsd-template-ts-react-vite personalCabinet```
> ```cd personalCabinet```
> ```npm install```
> ```npm run dev```

### Install LESS
> ```npm install -D less ```

### Set Github
> go to main folder of project
> ``` git init```
> ``` git add . ```
> ``` git commit -m "Initial commit"```
> ``` git remote add origin <url>```
> ``` git branch -M main```
> ``` ```
> ``` ```



### Install Firebase
src/
 ├─ shared/
 │   ├─ lib/
 │   │   └─ firebase/
 │   │       ├─ config.ts        # init Firebase
 │   │       ├─ auth.ts          # logic for authentification
 │   │       ├─ firestore.ts     # work with Firestore
 │   │       └─ storage.ts       # work with Firebase Storage

Including example 
> import { signIn } from 'shared/lib/firebase/auth';




<!-- ======================================================== -->
<!-- ========================= Block 3 ====================== -->
<!-- ======================================================== -->
Login
https://www.behance.net/gallery/208799541/Login-and-Sign-up-Pages?tracking_source=search_projects|login+ui+ux+web+design&l=9

Personal cabinet
https://dribbble.com/shots/21752056-Busca-la-asa-Redesign-booking-service-dashboard-design

# Markdown Cheat Sheet

Headers:
# Header 1
## Header 2
### Header 3

Bold and Italic:
**Bold**
*Italic*
__Bold__
_Italic_

Lists:
- Unordered:
- item 1
- item 2

- Ordered:
1. first
2. second

Links:
[text link](https://example.com)

Images:
![alt text](https://example.com/image.jpg)

Blockquotes:
> This is a quote

Code:
Inline: `code`
Code block:

