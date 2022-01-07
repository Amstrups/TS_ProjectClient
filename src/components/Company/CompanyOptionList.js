export default function CompanyOptionList({company}) {
    const onClickDelete = () => {
        console.log("Delete")
    }
    const onClickUpdate = () => {
        console.log("Update")
    }

    const addOwner = () => {
        console.log("Add owner")
    }

    return (
        <ul className="optionsList">
            <li>
                <button onClick={onClickDelete}>Delete</button>
            </li> 
             <li>
                <button onClick={onClickUpdate}>Update</button>
            </li> 
              <li>
                <button onClick={addOwner}>Add Owner</button>
            </li> 

        </ul>
    )
}
