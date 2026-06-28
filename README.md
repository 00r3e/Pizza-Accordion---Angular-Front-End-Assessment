Pizza Accordion - Angular Front-End Assessment

Description:

This project is a simple Angular application that displays pizza items in an accordion. Each pizza contains three sizes (Small, Medium, Large), and each size has its own price.

The application allows users to:

Expand or collapse pizza sections.
Enable or disable individual pizza sizes.
Edit pizza prices.
Restore the original prices using the Undo button.
Persist changes using the browser's localStorage.

Technologies:

Angular
TypeScript
HTML
CSS

Project Structure:
src/app
│

├── components/

│   └── pizza-accordion/

│

├── services/

│   └── pizza.service.ts

│

├── models/

│   └── interfaces.ts

│

└── data/

│  └── pizza-data.ts

Installation:

Clone the repository.

Install dependencies:
npm install

Run the application:
ng serve

Open your browser at:
http://localhost:4200

Features:

Accordion interface
Editable pizza prices
Enable/Disable pizza sizes
Undo changes
Automatic saving to localStorage
Responsive and clean UI

Notes:

Initial pizza data is stored in the data folder.
Interfaces are defined in the models folder.
Data is provided through PizzaService.
User changes are saved in localStorage and restored when the application is reopened.
