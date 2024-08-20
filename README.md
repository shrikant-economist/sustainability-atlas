# React + TypeScript + Vite

This project is a React application bootstrapped with Vite and written in TypeScript. It provides a fast and modern development environment for building scalable and maintainable web applications.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

`git clone https://github.com/shrikant-economist/sustainability-atlas.git`
   
cd sustainability-atlas

2. **Install dependencies**:

Using npm: `npm install`

Or using Yarn: `yarn install`

### Running the Development Server**

To start the development server, run:

Using npm: `npm run dev`

Or using Yarn: `yarn dev`

This will start the Vite development server and you can view the application in your browser at http://localhost:3000.

### Building for Production

To build the project for production, run:

Using npm: `npm run build`

Or using Yarn: `yarn build`

The production-ready files will be generated in the dist directory.

### Linting and Formatting**

This project uses ESLint and Prettier for code linting and formatting. You can run the following commands to lint and format your code:

Linting:

Using npm: `npm run lint`

Or using Yarn: `yarn lint`

### Formatting:

Using npm: `npm run format`

Or using Yarn: `yarn format`

### Project Structure

Here's an overview of the project structure:

```sustainability-atlas/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .vscode/
│   └── settings.json
├── .eslintrc.json
├── .prettierrc
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md\
```

### Contributing

If you would like to contribute to this project, please follow these steps:

1. **Fork the repository.**
Create a new branch (git checkout -b feature/your-feature-name).

2. ***Make your changes.**
Commit your changes (`git commit -m 'Add some feature'`).
Push to the branch (`git push origin feature/your-feature-name`).
Open a pull request.

### Environment Variables

This project uses environment variables to manage different configurations for development, staging, production, and QA environments. The environment variables are defined in the following files:

- `.env` (default environment variables)
- `.env.staging` (staging environment variables)
- `.env.production` (production environment variables)
- `.env.qa` (QA environment variables)

#### Example Environment Variable Files

**.env**

```env
VITE_API_URL=http://localhost:3000/api
```

### Running the Application with Different Environments
To run the application with different environment configurations, use the following commands:

1. **Development:** (default): `npm run dev`

2. **Staging:** `npm run dev -- --mode staging`

3. **Production:**

`npm run build -- --mode production`
`npm run serve`

4. **QA:** `npm run dev -- --mode qa`

Make sure to replace the VITE_API_URL with the actual URLs for your API endpoints in each environment.

### License
This project is licensed under the MIT License. See the LICENSE file for more information.

### Contact
If you have any questions or suggestions, feel free to open an issue or contact the project maintainer.

Happy coding!
```
