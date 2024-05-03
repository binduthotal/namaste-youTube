export const useDaysElapsed = (publishedDate) => {

    // Parse the published date
    const published = new Date(publishedDate);

    // Get the current date
    const now = new Date();

    // Calculate the difference in milliseconds
    const diff = now - published;

    // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return days;
};
