/**
 * Calculate total professional experience from a start date
 * @param startDate - The date when professional experience started (format: YYYY-MM-DD)
 * @returns Formatted experience string (e.g., "1.5+", "2+")
 */
export function calculateExperience(startDate: string): string {
    const start = new Date(startDate);
    const now = new Date();

    // Calculate the difference in milliseconds
    const diffTime = Math.abs(now.getTime() - start.getTime());

    // Convert to years
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);

    // Round to one decimal place
    const years = Math.floor(diffYears * 10) / 10;

    // Format the output
    if (years < 1) {
        return `${Math.ceil(diffYears * 12)} months+`;
    } else if (years >= 1 && years < 2) {
        return `${years.toFixed(1)}+`;
    } else {
        return `${Math.floor(years)}+`;
    }
}

/**
 * Get the total experience in years as a number
 * @param startDate - The date when professional experience started (format: YYYY-MM-DD)
 * @returns Experience in years as a number
 */
export function getExperienceYears(startDate: string): number {
    const start = new Date(startDate);
    const now = new Date();

    const diffTime = Math.abs(now.getTime() - start.getTime());
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);

    return Math.floor(diffYears * 10) / 10;
}

/**
 * Professional experience start date
 * Update this constant when your professional journey began
 */
export const EXPERIENCE_START_DATE = '2024-07-01';

/**
 * Get total professional experience
 * This is the main function to use throughout the portfolio
 */
export function getTotalExperience(): string {
    return calculateExperience(EXPERIENCE_START_DATE);
}

/**
 * Get total experience in years as a number
 */
export function getTotalExperienceYears(): number {
    return getExperienceYears(EXPERIENCE_START_DATE);
}
