self.onmessage = (e: MessageEvent) => {
    const value = e.data;
    if (value <= 1) return self.postMessage(value);

    let a = 0, b = 1, temp;

    for (let i = 2; i <= value; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    self.postMessage(b);
}