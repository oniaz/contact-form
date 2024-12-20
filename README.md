# Contact Form with Express and Nodemailer

A simple contact form using a basic HTML frontend and a backend built with Express.js. The form sends user-submitted data (name, email, and message) to a server where it is handled by `nodemailer` to send the form data via email.

## Project Structure

- **Frontend**: A simple HTML form with fields for name, email, and message.
- **Backend**: A Node.js server using Express to handle form submissions and `nodemailer` to send the email.
- **CSS**: Basic styling for the contact form.
- **JavaScript (script.js)**: Handles form submission using `fetch` to send data to the backend.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/oniaz/contact-form.git
   cd contact-form
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables for `nodemailer`:

   Configure the email transporter with your email service provider's SMTP settings (e.g., Gmail, SendGrid). Create a `.env` file in the root of the project and replace the placeholders with your actual credentials:

   ```env
   EMAIL_SERVICE=gmail       # Your email provider's service (e.g., gmail, outlook)
   USER=your-email@gmail.com # Your email address
   PASS=your-email-password  # Your email password or API key
   ```

4. Run the server:

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:3000`.

## Usage

1. Open the `index.html` file in your browser.
2. Fill out the form and submit.
3. The form data will be sent to the specified email address.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express, Nodemailer
- **Environment Variables**: `.env` file to store email configuration securely
