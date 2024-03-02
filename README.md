# Project Title

The Name Of This Is Lead Hub Frontend. This Is A Social Media Lead`s Sharing
Tool.

## Demo link:

Currently, the Demo Link is Not available

## Table of Content:

- [Roadmap](#Roadmap)
- [Available Scripts](#Available_Scripts)
- [Folder information](#folder_information)
- [Naming conventions](#Naming_conventions)
- [Git rules](#Git_rules)
- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)
- [License](#license)

# Roadmap

- [application flow](https://drive.google.com/file/d/11ER8VBhDOtYktnEYlE2b3RacXF_T-Ses/view?usp=sharing)
- [additional feature flow](https://drive.google.com/file/d/11ER8VBhDOtYktnEYlE2b3RacXF_T-Ses/view?usp=sharing)
- [Solution Design](https://drive.google.com/file/d/11ER8VBhDOtYktnEYlE2b3RacXF_T-Ses/view?usp=sharing)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

this command check all the lint errors and warning and shows in the terminal

### `yarn lint --fix`

this command fix all the lint errors and warning if its fixable by lint

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Folder Information

- husky: we add a pre-commit hook to our project that will trigger certain checks to be performed by our tooling, we will check for linter errors and warnings, type errors, failing tests, and it will also automatically format our code. This probably sounds like a lot for a pre-commit hook ,these checks will not be performed for the entire project, only for the staged files we are about to commit.
- vscode contain same vscode setting for all developers

- The assets folder contains all of the project's static files, such as your logo, fonts, images, and favicons.

- Components folder contains a bit collection of UI codes such as buttons, forms, avatars, and shared components across project.

- config: we will place api key or any kind of constants what we can use across the project.

- Hooks folder contains codes and logic that can be reused across multiple components.

- navigation: project web pages routing goes here

- interfaces: all interface separated with module folder in this interface folder

  - load-route : in this folder we will create loadable screen , its a part of code splitting
    read More https://reactjs.org/docs/code-splitting.html

- The pages folder contains all your React application's web pages.

  - components: here we will manage components which lied to only related page,
  - query: folder contain api communication
  - hooks: contain custom hook like formik form
  - test: this folder will contain unit test with jest

- The redux folder houses your state management files, such as Redux, which are used to make certain functions and variables available throughout your application.

- Services folder contains code that allows you to interact with external API resources.

- The utils folder contains reusable function snippets for performing quick tasks like text truncation or down casing.

- The main component of your React application is the App.js file. This file connects all components and views.

- Index.js file is the React application's entry point. It is responsible for bootstrapping the React library and mounting it on the root element.

## Naming Conventions

Naming conventions are important in React to ensure that the code is easily understandable and maintainable. Here are some common naming conventions that are used in React:

1.Components: React components should be named using UpperCamelCase. For example, a component that displays a user profile could be named UserProfile.

2.Props: When defining props for a component, they should be named using camelCase. For example, if you have a prop for a user's name, it could be named userName.

3.State: State variables in a component should also be named using camelCase. For example, if you have a state variable that tracks the user's age, it could be named userAge.

4.Events: When defining event handlers for a component, they should be named using camelCase and prefixed with "handle". For example, if you have an event handler for a button click, it could be named handleButtonClick.

5.CSS classes: When defining CSS classes for a component, use lowercase with hyphens. For example, a class for a button could be named "button" or "primary-button".

6.Constants: Constants in React should be named using all caps with underscores. For example, if you have a constant for a user's role, it could be named USER_ROLE.

7.File names: File names for React components should be named using PascalCase. For example, if you have a component for displaying a user profile, the file name could be UserProfile.js.

8.Packages: Packages should be named using lowercase letters and hyphens. For example, a package for a web framework could be named express.

9.Modules: Module names should be named using camelCase. For example, if you have a module for handling user authentication, it could be named userAuth.

10.Classes: Class names should be named using UpperCamelCase. For example, if you have a class for representing a user, it could be named User.

11.Functions: Function names should also be named using camelCase. For example, if you have a function for calculating the sum of two numbers, it could be named calculateSum.

12.Variables: Variable names should also be named using camelCase. For example, if you have a variable for storing a user's email address, it could be named userEmail.

13.Constants: Constants in Node.js should be named using all caps with underscores. For example, if you have a constant for the maximum number of login attempts, it could be named MAX_LOGIN_ATTEMPTS.

14.File names: File names for Node.js modules should be named using camelCase. For example, if you have a module for handling user authentication, the file name could be userAuth.js.

## Git Rules

- as per feature we should create separate branch like feature/featurename
- or bug we will create branch like fix/bugname
- develop branch should not push directly

```
lead-hub-front-end
├─ .env
├─ .eslintrc.json
├─ .gitignore
├─ .husky
│  ├─ _
│  │  ├─ .gitignore
│  │  └─ husky.sh
│  ├─ pre-commit
│  └─ pre-push
├─ .yarnrc
├─ .nvmrc
├─ .prettierignore
├─ .prettierrc
├─ .vscode
│  └─ settings.json
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ src
│  ├─ App.css
│  ├─ App.test.tsx
│  ├─ App.tsx
│  ├─ assets
│  │  └─ Fonsts
│  │     └─ SecularOne-Regular.ttf
|  |─ components
│  │  ├─ Alert
│  │  │  ├─ Alert.tsx
│  │  │  ├─ AlertContext.ts
│  │  │  ├─ AlertProvider.tsx
│  │  │  ├─ index.ts
│  │  │  └─ useAlert.ts
│  │  ├─ DashboardContainer
│  │  │  ├─ AccountPopover.tsx
│  │  │  ├─ DashboardNavbar.tsx
│  │  │  ├─ DashboardSidebar.tsx
│  │  │  ├─ NavItem.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ logo.tsx
│  │  ├─ Filter
│  │  │  ├─ DateRangePicker.tsx
│  │  │  ├─ Select.tsx
│  │  │  └─ index.tsx
│  │  ├─ Layouts
│  │  │  ├─ Popper
│  │  │  │  └─ PopperContainer.tsx
│  │  │  ├─ PopupModals
│  │  │  │  ├─ Slider.tsx
│  │  │  │  └─ Transition.tsx
│  │  │  └─ Portals
│  │  │     └─ index.tsx
│  │  ├─ Loader
│  │  │  ├─ Spinner.tsx
│  │  │  └─ index.tsx
│  │  ├─ SearchBar
│  │  │  └─ index.tsx
│  │  ├─ severity-pill
│  │  │  └─ index.tsx
│  │  ├─ Snackbar
│  │  │  ├─ Snackbar.tsx
│  │  │  ├─ SnackbarContext.ts
│  │  │  ├─ SnackbarProvider.tsx
│  │  │  ├─ index.ts
│  │  │  └─ useSnackbar.ts
│  │  ├─ Switch
│  │  │  └─ index.tsx
│  │  ├─ TableToolBar
│  │  │  └─ index.tsx
│  │  └─ TextField
│  │     └─ index.tsx
│  ├─ config
│  │  └─ index.ts
│  ├─ constants
│  │  ├─ ErrorMessages.ts
│  │  ├─ constants.ts
│  │  └─ interfaces.ts
│  ├─ interfaces
│  ├─ hooks
│  │  └─ useUserInfo.ts
│  ├─ index.css
│  ├─ index.tsx
│  ├─ logo.svg
│  ├─ navigation
│  │  ├─ ProtectedRoute.tsx
│  │  ├─ appRoutes.ts
│  │  ├─ index.tsx
│  │  └─ loadRoutes
│  │     ├─ adminLoad.tsx
│  │     └─ authLoad.tsx
│  ├─ pages
│  │  ├─ Admin
│  │  │  └─ Dashboard
│  │  │     └─ index.tsx
│  │  └─ Auth
│  │     └─ Login
│  │        ├─ Hooks
│  │        │  └─ useForm.ts
│  │        ├─ index.tsx
│  │        └─ Query
│  │           └─ useLogin.ts
│  ├─ react-app-env.d.ts
│  ├─ redux
│  │  ├─ store.ts
│  │  └─ User
│  │     ├─ auth.ts
│  │     └─ message.ts
│  ├─ reportWebVitals.ts
│  ├─ services
│  │  ├─ authService.ts
│  │  └─ endPoints.ts
│  ├─ setupTests.ts
│  ├─ theme
│  │  ├─ index.ts
│  │  ├─ newTheme.js
│  │  ├─ palette.ts
│  │  ├─ styles.ts
│  │  └─ typography.ts
│  └─ utils
│     ├─ ApiClient.ts
│     ├─ QueryKeys.ts
│     ├─ cookies.ts
│     ├─ getInitials.js
│     └─ index.tsx
├─ tsconfig.json
└─ yarn.lock

```

## Technologies

- Framework

  - react.

- Languages

  - typescript

- UI-Management
  - Material-UI.
- Routing-Management

  - react-router-dom

- State-Management.

  - Redux
  - Redux-ToolKit.
  - Redux-Parsis

- Form-Management

  - formik [State-Management]
  - yup [Validation-Management]

- API Call
  - Axios [api-call]
  - react-query [catch-Management]
- Time-Formant management
  - Dayjs
- Testing
  - jest

## Approach

- Agile

This approach incorporates both iterative and incremental. In the example above, A part of feature A can go live early in the first month, a part of feature B can go live in the second third of the first month, and a part of feature C can go live at the end of the first month. The three "features", i.e., A1, B1 and C1 are evolved and enhanced and delivered through out the second month and by the end of the the third month all features are fully functional and delivered.

To determine the approach that should be used, one should ask whether the process is driven by frequent feedback, if the delivery should be “big bang” or "phased", if a high volume of change is expected, and if the project will invest heavily in quality. Regardless of the approach, the phases of the systems life cycle still include analysis/requirements, design/development, testing, implementation and maintenance.

## Status

Solution Design.

## Credits

List of contributors:

- [Elvin (owner)](https://gitlab.com/tekvology)
- [Riyaz Sheikh (team leader)](https://gitlab.com/tekvology)
- [Sohail Sheikh (developer)](https://gitlab.com/tekvology)

## License

MIT license @ [author](https://gitlab.com/tekvology)
![Screenshot](https://gitlab.com/uploads/-/system/user/avatar/13439878/avatar.png?width=400)
