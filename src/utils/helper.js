export const dateFromString = str => {
    const arr = str.split('-');
    return new Date(Number(arr[0]), Number(arr[1]) - 1, Number(arr[2]));
};

export const filter = (arr, str) => {
    return arr.filter(item => dateFromString(item.show.premiered) < dateFromString(str));
};
