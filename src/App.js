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

  const deleteHandler = (id) => {
    setItem((prevState)=>{
        const updatedItem = [...prevState]
        return updatedItem.filter(x => x.id != id)
    })
  }
  return (
 <ChakraProvider>
     <div>
         <Userinput onAdd={addItemHandler}> </Userinput>
         <div className={`${item.length < 1 && styles.show}`}>
             <ItemList items = {item}  onDeleteItem={deleteHandler}></ItemList>
         </div>


     </div>
 </ChakraProvider>




  );
}

export default App;
