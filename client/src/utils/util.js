// Returns true if the user has loggedIn.
export const isLoggedIn = () => {
    return !!localStorage.getItem('token');
}

// Takes a timestamp (milliseconds since epoch) and formats it to 'mm-yyyy'.
export const timestampDateToHuman = (dateString) => {
    const rawDate = new Date(dateString);
    return `${rawDate.getMonth()+1}-${rawDate.getFullYear()}`;
};