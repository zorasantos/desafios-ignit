type TasksCounterProps = {
  text: string;
  totalTasks?: number;
  counter?: number;
  className: string;
}

export const TasksCounter = ({text, counter = 0, className, totalTasks}: TasksCounterProps) => {
  const counterTasks = totalTasks ? `${counter} de ${totalTasks}` : counter
  return (
      <div>
        <span className={className} >{text}</span>
        <span className="text-[#FFFFFF] text-[12px] font-bold bg-[#333333] w-[25px] h-[19px] py-[2px] px-[8px] rounded-[999px]">
          {counterTasks}
        </span>
      </div>
    )
}