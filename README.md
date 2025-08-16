# Trend-Front-End-Assessment

## Introduction

A responsive sign-up form interface built with vanilla HTML, CSS, and JavaScript. This project demonstrates modern web development practices including form validation, responsive design, and user-friendly interactions for an account creation flow.

## Demo URL

[https://wilsoniscoding.github.io/Trend-Front-End-Assessment/](https://wilsoniscoding.github.io/Trend-Front-End-Assessment/)

## Form Submission Data

The form submissions are sent to a Google Apps Script endpoint and stored in a Google Sheets document. 

- **View submitted data**: [Google Sheets](https://docs.google.com/spreadsheets/d/1H9CVmPXV2vBzHXG0HtJZnsPqi-7_DI5Un5bjh6oDYzQ/edit?gid=0#gid=0)
- **View API source code**: [Google Apps Script](https://script.google.com/home/projects/1QnYzfxpYSvZzzWsbsIky9BaxuRXqR7Fad09MgKZC4QYagISMl-EqqW27/edit)

## Setup / View Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/WilsonIsCoding/Trend-Front-End-Assessment.git
   cd Trend-Front-End-Assessment
   ```

2. **Open the project:**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required
   - All assets are included locally

3. **Browser Compatibility:**
   - Works on all modern browsers (Chrome, Firefox, Safari, Edge)
   - Responsive design supports mobile and desktop viewports

## Layout Approach and Structure

### Responsive Design Strategy
- **Mobile-First Approach**: Base styles designed for mobile screens with progressive enhancement for larger viewports
- **Breakpoint**: Single breakpoint at 640px for optimized mobile/desktop experience
- **Container System**: Centered container with max-width of 610px for optimal readability

### CSS Architecture
- **Flexbox Layout**: Used extensively for component alignment and spacing
- **CSS Variables**: System fonts and consistent color scheme (#3C71FF primary, #F1F5FF background)
- **Floating Labels**: Custom implementation using absolute positioning and CSS transitions
- **Hover States**: Interactive feedback on buttons and links with smooth transitions

### Form Structure
- **Progressive Disclosure**: Social login options presented first, followed by email registration
- **Field Grouping**: First/Last name fields displayed side-by-side on desktop, stacked on mobile
- **Real-time Validation**: Password requirements update dynamically as user types
- **Error Handling**: Clear visual feedback with red borders and error message banner

### JavaScript Features
- **Password Toggle**: Show/hide password functionality with icon switching
- **Live Validation**: Real-time password strength checking (8+ characters, contains number)
- **Form Validation**: Comprehensive validation on submit with field-specific error states
- **Event Delegation**: Efficient event handling for multiple form inputs
- **User Feedback**: Alert messages for demo purposes on form submission

## AI Tools Usage

During the development of this project, AI tools were utilized in the following ways:

- **Code Review and Optimization**: Used to review the code structure and suggest improvements for better maintainability
- **CSS Best Practices**: Consulted for modern CSS techniques and cross-browser compatibility
- **Accessibility Considerations**: Helped ensure proper ARIA labels and semantic HTML structure
- **Documentation**: Assisted in creating this comprehensive README file

All code was manually implemented and tested, with AI serving as a development assistant for best practices and documentation.
