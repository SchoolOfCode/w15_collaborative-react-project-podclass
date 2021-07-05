const List = ({ listItem }) => {
  // if (!listItem.length===0)
  {
    console.log(listItem);
    return (
      <li>
        <a>{listItem}</a>
      </li>
    );
  }
  return console.log("false");
};

export default List;

//filter through list array
//if item.legnth >0 create lists
