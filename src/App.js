import Userinput from "./components/Userinput";
import {ChakraProvider} from "@chakra-ui/react";
import {useState} from "react";
import ItemList from "./components/ItemList";
import styles from './components/Userinput.module.css'

function App() {
 const [item, setItem] = useState([])

  const addItemHandler = (enterdText) => {
    setItem((prevItem) => {
     const updatedItem = [...prevItem]
     updatedItem.unshift({email: enterdText.email, amount: enterdText.amount, id: Math.random().toString()})
     return updatedItem

    })
  }
  return (
<div>
    <Userinput onAdd={addItemHandler}> </Userinput>
    <div className={`container ${styles.container} ${item.length < 1 && styles.show}`}>
        <ItemList items = {item}></ItemList>
    </div>


</div>



  );
}

export default App;
