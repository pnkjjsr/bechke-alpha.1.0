export function offerPercent(mrp, offer) {
    let off = Math.round(((mrp - offer) / mrp) * 100)
    return off;
}

export const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        resolve(event.target.result)
    };

    reader.readAsDataURL(file);
})