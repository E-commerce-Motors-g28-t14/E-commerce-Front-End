# Front-end Documentation 
## Technologies Used

<strong></strong>
<ul>
  <li>
    <strong>HTML5: </strong> Markup language for structuring the application's
    web pages.
  </li>
  <li>
    <strong>CSS3: </strong>Stylesheet language used for styling the user
    interface.
  </li>
  <li>
    <strong>JavaScript: </strong>Programming language for adding interactivity
    and dynamic behavior to the application.
  </li>
  <li>
    <strong>React: </strong>JavaScript library for building reusable UI
    components.
  </li>
  <li>
    <strong>TypeScript: </strong>A typed superset of JavaScript used for static
    typing and improved developer productivity.
  </li>
</ul>

## Project Structure

```
├── src
│   │── assests
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Banner.tsx
│   │   └── ...
│   ├── contexts
│   │   ├── carContexts.tsx
│   │   ├── Sidebar.tsx
│   │   └── ...
│   ├── hooks
│   │   ├── carsHook.ts
│   │   ├── filterHooks.ts
│   │   └── ...
│   ├── interfaces
│   │   ├── carInterface.ts
│   │   ├── userInterface.ts
│   │   └── ...
│   ├── pages
│   │   ├── Home
│   │   ├── Sellerpage
│   │   └── ...
│   ├── schemas
│   │   ├── user.Schemas.ts
│   ├── services
│   │   ├── apiCep.service.ts
│   │   ├── apiFipe.service.ts
│   │   └── ...
│   ├── styles
│   │   ├── App.css
│   │   ├── globalStyle.ts
│   │   └── ...
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── public
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   └── vite.config.ts
└── ...

```

## Pages
<ul>
  <li>
    <strong>Home: </strong>
    The home page represents the main landing page of the application, where
    users can explore various features, browse available cars, and access
    relevant information about the platform.
  </li>
  <li>
    <strong>GeneralSellerPage: </strong>
    This page serves as a general platform for sellers to showcase their
    products without any specific protected routes or restrictions.
  </li>
  <li>
    <strong> SellerPage: </strong>
   The seller page is a protected route accessible only to
    authenticated users. It offers the same functionality as the
    GeneralSellerPage, but with additional features such as the ability to edit
    and delete their advertisements.
  </li>

  <li>
    <strong>Login: </strong> The login page is where users can securely log into
    their accounts by providing their credentials, granting them access to
    personalized features and functionalities.
  </li>
  <li>
     <strong>Product: </strong> The product page provides comprehensive details about a specific
    car listing, including information about the car itself, as well as details
    about the seller and their contact information.
  </li>
  <li>
    <strong>Recovery:</strong>
     The recovery page enables users who have forgotten their passwords
    to initiate the password recovery process.
  </li>
  <li>
    <strong> Register:</strong>
    The register page allows new users to create an account on the
    platform.
  </li>
 
</ul>

## Styling

<ul>
  <li>
    <strong> Styled Components: </strong>
   We leverage Styled Components to define the layout and
    styling of our components.
  </li>
  <li>
    <strong>Global Styles: </strong>
    We utilize global styles to establish a standardized styling
    configuration for our application. These global styles ensure consistency
    and provide a cohesive look and feel across different components and pages.
  </li>
  <li>
    Use responsive design principles to ensure the application is
    mobile-friendly.
  </li>
</ul>

## Third-Party Libraries
<ul>
    
  <li><strong>axios: </strong> Promise-based HTTP client for making API requests.</li>
  <li>
    <strong>react-router-dom: </strong>Library for handling routing and navigation within the
    application.
  </li>
  <li>
   <strong> styled-components: </strong>Library for styling React components using tagged
    template literals.
  </li>
  <li>
    <strong>framer-motion: </strong>Library for creating smooth animations and interactive UIs.
  </li>
  <li> <strong>zod: </strong>Library for runtime type checking in JavaScript and TypeScript.</li>
  <li>
   <strong>react-toastify: </strong> Library for displaying toast notifications in React
    applications.
  </li>
</ul>

## Development Guidelines
<ul>
  <li>
    Follow the <a href="https://www.figma.com/file/KX3C3fIi8zmCRpNipxIYYF/M6---E-Commerce-Filter?type=design&node-id=45-2">Figma Style Guide </a> for code consistency and
    readability.
  </li>
  <li>Use Git for version control and follow GitFlow branching model.</li>
  <li>Write clean, modular, and reusable code.</li>  
  <li>Use formatting tools for code quality and consistency.</li>
</ul>

## Getting Started 

To set up the front-end development environment and start the application locally:

<ol>
  <li>Clone the repository from GitHub.</li>
  <li>Install the required dependencies using yarn install.</li>
  <li>Start the development server with yarn dev.</li>
  <li>Access the application in your web browser at <strong>http://localhost:5173 </strong> </li>
</ol>

## Deployment 
Deploy the front-end application to a suitable hosting platform vercel for production use. 

## Additional Resources

<ul>
  <li>
    <a href="https://reactjs.org/docs/getting-started.html"
      >React documentation</a
    >
  </li>
  <li>
    <a href="https://www.typescriptlang.org/docs/">TypeScript documentation</a>
  </li>
  <li>
    <a href="https://css-tricks.com/">CSS Tricks :</a> Website with CSS tutorials
    and resources.
  </li>
  <li>
    <a href="https://developer.mozilla.org/en-US/">MDN Web Docs: </a
    >Comprehensive web development documentation.
  </li>
</ul>
