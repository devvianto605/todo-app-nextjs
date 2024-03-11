# To-do list app (NextJS)
(dw-frontend-test)
| Desktop View  | Mobile View |
| ------------- | ------------- |
| ![Screenshot_11-3-2024_02751_localhost](https://github.com/devvianto605/dw-frontend-test/assets/101519510/8175f498-b693-4e3e-b92d-d208ab916636) | ![Screenshot_11-3-2024_05521_localhost](https://github.com/devvianto605/dw-frontend-test/assets/101519510/9610ef53-7cc9-4709-bda6-51b963224bdc) |

## Feature:
- 100% Typescript
- 100% CSS-in-JS using Styled Component following principles of Library UI as components should be prop passable and reusable eg. <div> and <p> as <Box> and <Text>
- Framer motion for smooth user experience 
- NextJS (app router) for better performance and project structure
- contextAPI to manage dropdown filter state to be used in another component
- Hooks (useRef for element ref, useState for internal state management ,and custom hook for data fetching services)
- React Hook Form and Zod for form management and data validation that passed to api invoker
- React query to manage CRUD api and invalidate obsoleted data
- Responsive
- Setup Eslint rules / Prettier for better readability
- Setup Husky for pre-commit / commit-lint to run lint test before commit
- Still required to run local apis as the direction suggested or direct to exteral api endpoint by add NEXT_PUBLIC_BASE_API_URL to .env

## Run
```npm i ``` >
``` npm run dev ```

## Change API Base Endpoint (Origin)
.env > ```NEXT_PUBLIC_BASE_API_URL=<API_ENDPOINT>```

