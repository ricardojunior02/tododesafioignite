import { 
  MainTasks, 
  Button, 
  ButtonCreateTask, 
  HeaderTask,
  TasksContainer
} from "./Main.module";

import { useState } from 'react';

import plus from '../assets/plus.png'
import { WithTask } from "./WithTask";
import { WithoutTask } from "./WithoutTask";



export function Main(){

  const thereTask = 1
  const[ taskList, setTaskList] = useState([])

  const [newTaskText, setNewTaskText] = useState({'id': '1', 'title': 'fazer arroz', 'isComplete': 'false'})

  console.log(newTaskText)
  

  return(
    
    <TasksContainer>
      <MainTasks>
        <Button >
          <textarea 
            type="text" 
            name="inputTask" 
            placeholder="Adicione uma nova tarefa"

          />
          <ButtonCreateTask type='submit' >
            <span>Criar</span>
            <img src={plus} alt=""/>
          </ButtonCreateTask>
        </Button>

        <HeaderTask>
            <p> Tarefas criadas <span>{thereTask}</span></p>
            <p>Concluídas <span> 0 de 0 </span></p>
        </HeaderTask>

        { thereTask > 0 ? 
          taskList.map(task =>{
            return (
            <WithTask

            titulo={task}
              
              //completo={task.isComplete}
              
              // eliminar={task.isDelited}
            />
          )
          })
          : 
          <WithoutTask/>}

      </MainTasks>
    </TasksContainer>
    

  )
}