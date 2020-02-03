import React from 'react';
import Item from "./Item";

const List = ({list}) => {
    return  <div className="list col-lg-12">
        {!!list.length && list.map(item =>
        {
            return <Item
                key={item.show.id}
                item={item.show}
                obj={item}
            />
        })}
    </div>
};

export default List;
