import '../index.css'

// ------------ PROPS------------------

export default function TabButton({onSelect,choice})
{
  // console.log(choice);
  
  console.log("button clicked")
  return (
    <li>
      <button onClick={onSelect}>{choice}</button>
    </li>
  );
}
