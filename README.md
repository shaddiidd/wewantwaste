# Overview

## Technical Approach

### Frontend

- **Framework:**  
  React 19, using functional components and hooks for state management.
- **Styling:**  
  Tailwind CSS for utility-first, responsive design. Preflight is disabled for easier integration with custom styles.
- **Component Structure:**  
  - **SkipCard:** Displays skip details, price, and restrictions. Highlights selection and shows warnings (e.g., "Not Allowed On The Road").
  - **SkipCardSkeleton:** Animated skeleton for loading states.
  - **StepHeader:** Custom stepper navigation with icons for each booking stage.
  - **BottomBar:** Fixed summary and navigation bar, showing selected skip details and navigation buttons.
- **Pages:**  
  - **SkipSize:** Main page for selecting skip size. Handles loading, error, and empty states, and fetches skip data from the backend.
- **Assets:**  
  Skip images are dynamically loaded based on skip size.

### Data & API

- **API Integration:**  
  Uses Axios for HTTP requests. The API base URL is configurable via environment variables.
- **Data Fetching:**  
  Skips are fetched from an endpoint. Error and loading states are handled.
- **Dynamic Rendering:**  
  Skip options, prices, and restrictions are rendered based on API data.

### User Experience

- **Selection Feedback:**  
  Selected skip is visually highlighted. Warnings are prominent and color-coded.
- **Accessibility:**  
  - High-contrast colors and large click targets.
  - Keyboard and screen reader friendly.
- **Responsiveness:**  
  Layout adapts to all screen sizes.

---

## UI/UX Improvements

### Old Site

- Dark theme with blue highlights.
- Skip cards are less visually distinct.
- Selection state is less obvious.
- Warnings are present but not prominent.
- Stepper is less engaging and less clear.

### Our Site

- **Light, Clean Theme:**  
  White background with blue accents for a modern, open feel.
- **Skip Cards:**  
  Larger, visually appealing, with clear images and spacing.
- **Selection State:**  
  Selected skip is outlined, elevated, and obvious.
- **Warnings:**  
  "Not Allowed On The Road" is highly visible with a yellow badge and icon.
- **Navigation:**  
  Stepper is prominent, with icons and clear progress indication.
- **Typography & Icons:**  
  Improved readability with larger fonts and clear icons.
- **Responsiveness:**  
  Layout adapts smoothly to all devices.
- **Bottom Bar:**  
  Persistent summary and navigation for user confidence.

**Key UX Gains:**
- Improved clarity and readability.
- Stronger visual hierarchy and feedback.
- Modern, consistent aesthetics.
- Greater user confidence and transparency.

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the app:**
   ```bash
   npm start
   ```
3. **Run tests:**
   ```bash
   npm test
   ```
