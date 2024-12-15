function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        return c === 'x' ? r.toString(16) : (r & 0x3 | 0x8).toString(16);
    });
}
console.log(generateUUID());
