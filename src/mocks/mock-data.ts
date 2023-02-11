interface HappinessPoints {
    self_points: number;
    work_points: number;
    co_worker_points: number;
}

const randomNumber = (min: number = -5, max: number = 5): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomHappinessPoint = (): HappinessPoints => {
    return {
        self_points: randomNumber(),
        work_points: randomNumber(),
        co_worker_points: randomNumber(),
    }
}

export const happiness_points = {
    id: 1,
    period: "weekly",
    record: [
        {
            happiness_points: {
                ...randomHappinessPoint()
            },
            date: "2023-01-29",
        },
        {
            happiness_points: {
                ...randomHappinessPoint()
            },
            date: "2023-01-22",
        },
        {
            happiness_points: {
                ...randomHappinessPoint()
            },
            date: "2023-01-15",
        },
        {
            happiness_points: {
                ...randomHappinessPoint()
            },
            date: "2023-01-08",
        },
        {
            happiness_points: {
                ...randomHappinessPoint()
            },
            date: "2023-01-01",
        },
    ],
}