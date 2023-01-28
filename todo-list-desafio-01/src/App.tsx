import { useState } from 'react';
import { v4 as randomUUID } from "uuid"
import { Empty } from './components/Empty';
import { Header } from './components/Header';
import { TaskCard } from './components/TaskCard';
import { TasksCounter } from './components/TasksCounter';
import { Form } from './components/Form';

type TaskProps = {
  title: string;
  isComplete: boolean;
  id: string;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const counterCompleteTask = tasks?.filter((item: TaskProps) => item.isComplete === true).length

  const onSubmit = (value: string) => {
    const newElement = {
      id: randomUUID(),
      title: value,
      isComplete: false
    }
    setTasks((state) => [...state, newElement])
  }

  const onChecked = (id: string) => {
    setTasks(tasks?.map((item: TaskProps) => item.id === id ? {...item, isComplete: !item.isComplete} : {...item}));
  }

  function handleDeleteTask(id: string) {
    setTasks(tasks?.filter((item: TaskProps) => item.id !== id));
  }

  return (
    <>
      <Header />
      <Form onSubmit={onSubmit} />
      <div className='flex flex-col mx-auto items-center gap-6 w-[736px]'>
        <div className='flex w-full justify-between'>
          <TasksCounter className='text-[#4EA8DE] text-[14px] font-bold mr-3' text='Tarefas Criadas' counter={tasks?.length} />
          <TasksCounter className='text-[#8284FA] mr-3' text='Concluídas' totalTasks={tasks?.length} counter={counterCompleteTask} />
        </div>
        <span className="h-[1px] bg-[#333333] mb-12 w-full"></span>
        {tasks?.length === 0 && <Empty /> }
        {tasks?.map((item: TaskProps) =>  (
          <TaskCard onChecked={onChecked} onDelete={handleDeleteTask} key={item.id} id={item.id} isComplete={item.isComplete} title={item.title} />
        ) )}
      </div>
    </>
  );
}

export default App;
