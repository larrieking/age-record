function Item(props) {

    return(

            <tr>
                <td>{props.id}</td>
                <td>{props.email}</td>
                <td>{props.amount}</td>

            </tr>

    )
}

export default Item