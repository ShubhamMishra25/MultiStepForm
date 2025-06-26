# Multi-Step Form with Next.js

## Overview
This project is a modular, user-friendly multi-step form built using Next.js, React Hook Form, and Zod for validation. The form includes step progress indicators, inline validation, and a clean UI/UX.

## Features
- **Multi-Step Navigation**: Navigate between steps with "Next" and "Back" buttons.
- **Validation**: Inline validation using Zod, triggered only on "Next".
- **Error Messages**: Inline error messages displayed next to form fields.
- **Password Visibility Toggle**: Show/hide password functionality with eye icons.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used
- **Next.js**: Framework for building React applications.
- **React Hook Form**: Library for managing form state and validation.
- **Zod**: Schema-based validation library.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Project Structure
```
public/
  eye.svg
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
src/
  app/
    favicon.ico
    globals.css
    layout.tsx
    page.tsx
    _components/
      multi-step-form.tsx
      step-progress.tsx
    hooks/
      Use-multi-step-view-model.tsx
  components/
    ui/
      button.tsx
      calendar.tsx
      card.tsx
      form.tsx
      input.tsx
      label.tsx
      popover.tsx
      select.tsx
  lib/
    utils.ts
```

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd multistep-form-next
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Usage
1. Fill out the form step by step.
2. Navigate between steps using "Next" and "Back" buttons.
3. Submit the form on the final step.

## Customization
- **Validation Schema**: Modify `createUserSchema` in `src/app/hooks/Use-multi-step-view-model.tsx` to update validation rules.
- **UI Components**: Customize components in `src/components/ui/`.
- **Styling**: Update styles in `globals.css` or use Tailwind CSS classes.

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## Contact
For questions or feedback, please contact [your-email@example.com].
