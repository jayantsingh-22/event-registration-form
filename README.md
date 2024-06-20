# Event Registration Form

A responsive and dynamic event registration form built with React.js. The form includes various input fields, conditional logic, and validation. It allows users to register for an event and optionally include a guest. The form data is summarized and displayed upon submission.

## Features

- **Dynamic Fields**: The form includes fields such as Name, Email, Age, and an optional Guest Name, which appears only if the user is attending with a guest.
- **Validation**: Input fields are validated for required entries, valid email format, and appropriate age values.
- **Summary Display**: After form submission, a summary of the entered data is displayed.

## Technologies Used

- **React.js**: For building the user interface with functional components and hooks.
- **CSS**: For styling the application with a dark theme and glassmorphism effects.
- **Vercel**: For deployment and hosting.

## Custom Hooks
- **useForm**: A custom hook for managing form state, handling input changes, and validating form data.
- **useGuest**: A custom hook for managing guest state and handling guest-related logic.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your machine.

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/your-repository-name.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd your-repository-name
    ```
3. **Install dependencies**:
    ```sh
    npm install
    or 
    yarn install
    ```
4. **Run the application**:
    ```sh 
    npm start
    or
    yarn start
    ```