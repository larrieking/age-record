import Item from "./Item";
import styles from './Userinput.module.css'

function ItemList(props) {



    return(
        <table className={`table ${styles.container} container`}>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Amount</th>

            </tr>
            </thead>
            <tbody>
            {console.log(props.items)}
            {props.items.map((item)=>
                <Item key={item.id} id = {item.id} email = {item.email} amount = {item.amount} onClick={props.onDeleteItem}></Item>
            )}

            </tbody>
        </table>
    )
}
export default ItemList