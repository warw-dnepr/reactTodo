

export default function TodoLi(props){

// props.deleteFunk(props.item.id)
   return(
      <>
         <li key={props.item.id}>{props.item.value} <button>delete</button></li>

      </>
   )
}