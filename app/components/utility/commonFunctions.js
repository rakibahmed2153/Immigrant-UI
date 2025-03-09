// Email Validation Check
const isValidEmail = (email) => {
    // Define a regular expression pattern for email validation.
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}


export default isValidEmail;