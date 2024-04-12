export const getErrorMessage = (error: unknown): string => {
    let message: string;

    // Checking the error type and parsing it into a message string;
    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message);
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Unknown error";
    };

    return message;
};