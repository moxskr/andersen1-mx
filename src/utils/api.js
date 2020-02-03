export const saveToLocal = text => {
    localStorage.setItem('search-text', text);
};

export const fetchFromLocal = () => {
    return localStorage.getItem('search-text');
};

export const saveToFavourite = item => {
    const arr = JSON.parse(localStorage.getItem('favourite-list')) || [];
    if(!isItemInFavourite(item)){
        localStorage.setItem('favourite-list', JSON.stringify([...arr, item]));
    }
};

export const isItemInFavourite = item => {
    const arr = JSON.parse(localStorage.getItem('favourite-list')) || [];
    let is = false;
    arr.forEach(it => {
        if(it.show.id === item.show.id) is = true;
    });
    return is;
};

export const deleteItemFromFavourite = item => {
    const arr = JSON.parse(localStorage.getItem('favourite-list'));
    const newArr = arr.filter(it => it.show.id !== item.show.id);
    localStorage.setItem('favourite-list', JSON.stringify(newArr));
};

export const fetchItemsFromFavourite = item => {
    return JSON.parse(localStorage.getItem('favourite-list')).map(item => ({...item, show : {...item.show, isFavourite : isItemInFavourite(item)}})) || [];
};
