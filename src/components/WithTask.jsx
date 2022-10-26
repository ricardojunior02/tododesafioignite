import { WithTasks } from './WithTask.module'
import trash from '../assets/trash.png'


export function WithTask(props) {
  return(
    <WithTasks>
      <input type='checkbox' concluded='false'  ></input>
      <p>{props.titulo}</p>
      <button><img src={trash} /></button>
    </WithTasks>
  )
}