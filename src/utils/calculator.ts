export const calculateCount = (value: number) => {
    if (value <= 1) return value;

    let a = 0, b = 1, temp;

    for (let i = 2; i <= value; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}