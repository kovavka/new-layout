let innerDoraValues: number[] = [];
for (let i = 0; i <= 20; i++) {
    innerDoraValues.push(i)
}

let innerFuValues: number[] = [20, 25];
for (let i = 3; i <= 12; i++) {
    innerFuValues.push(i * 10)
}

export const doraValues = innerDoraValues;
export const redFivesValues = [0, 1, 2, 3, 4];
export const fuValues = innerFuValues;