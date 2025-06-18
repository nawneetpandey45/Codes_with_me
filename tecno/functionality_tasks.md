0. Initialise a mongodb clusture, share that.

    - add that to env.
    - manually test signup and login/logout functionality.

1. Initialise Other pages and actions.
2. do betterment of modularity of
    - /auth/signup
    - /auth/login
      : eg - Replace schemas to validators.ts , Replace components of pages to @/components (create them), etc.
3. For user-dropdown:
    - If authenticated = show logout option
    - else = show signup, login option

-   Create the middleware for protected routes.

P1:

-   NodeMailer-Issue:
    -   There is some error related to nodemailer. (fs related)
    -   try to solve that and use "sendWelcomeEmail" function at signup page.
