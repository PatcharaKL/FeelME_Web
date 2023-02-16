const range = 10;
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
interface HappinessHistory {
    happiness_points: HappinessPoints;
    date: string;
}
const generateData = (n: number): HappinessHistory[] => {
    const history: HappinessHistory[] = []
    for (let i = 0; i < n; i++) {
        const txn: HappinessHistory = {
            happiness_points: {
                ...randomHappinessPoint()
            },
            date: generateDate(i),
        }
        history.push(txn)
    }
    return history
}

const generateDate = (i: number): string => {
    const week = i * 7;
    const date = new Date(Date.now())
    const dateFormattedString = date.toLocaleDateString()
    return dateFormattedString
}

export const happinessPointsMock = {
    id: 1,
    period: "weekly",
    record: generateData(range)
}