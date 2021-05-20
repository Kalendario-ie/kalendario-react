const range = (len: number) => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

const newPerson = () => {
    const statusChance = Math.random()
    return {
        firstName: '42',
        lastName: 'da',
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status:
            statusChance > 0.66
                ? 'relationship'
                : statusChance > 0.33
                ? 'complicated'
                : 'single',
    }
}

export default function makeData(len: number) {
    const makeDataLevel = (depth = 0) => {
        return range(len).map(d => {
            return {
                ...newPerson(),
            }
        })
    }

    return makeDataLevel()
}
