import { WithTasks } from './WithTask.module'
import trash from '../assets/trash.png'


export function WithTask(props) {


  return(
    <WithTasks concluded={props.concluded} >
      <input type='checkbox'></input>
      <p>{props.titulo}</p>
      <button onClick={props.deleteTask} ><img src={trash} /></button>
    </WithTasks>
  )
} 