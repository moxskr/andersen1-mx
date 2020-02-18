export const dateFromString = str => {
    if(str){
        const arr = str.split('-');
        return new Date(Number(arr[0]), Number(arr[1]) - 1, Number(arr[2]));
    }
    else{
        return new Date();
    }
};

export const filter = (arr, str) => {
    return arr.filter(item => dateFromString(item.show.premiered) < dateFromString(str));
};
