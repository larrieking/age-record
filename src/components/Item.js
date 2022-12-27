function Item(props) {
    const deleteHandler = (event) => {
      props.onClick(props.id)
    }

    return(

            <tr onClick={deleteHandler}>
                <td>{props.id}</td>
                <td>{props.email}</td>
                <td>{props.amount}</td>

            </tr>

    )
}

export default Item