export const isRatingAvailable = (
    rating: number,
    totalVotes: number
): boolean => {
    return rating !== 0 && totalVotes > 5
}
