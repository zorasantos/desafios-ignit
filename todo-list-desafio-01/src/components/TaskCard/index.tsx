import TrashIcon from '../../assets/trashIcon.svg'

type TaskCardProps = {
  title: string;
  isComplete: boolean;
  id: string;
  onChecked: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskCard = ({ id, title, isComplete, onChecked, onDelete }: TaskCardProps) => {

  const handleChange = () => {
    onChecked(id)
  }

  const handleDelete = () => {
    onDelete(id)
  }

  return (
      <div className='flex gap-3 p-4 rounded-[8px] bg-[#333333] w-full'>
        <input className='w-[17.45px] h-[17.45px] my-auto' onChange={handleChange} type="checkbox" />
        <p className={`
        text-[14px]
        ${isComplete ? "text-[#808080] line-through" : "text-[#F2F2F2]"}
        font-normal`}>{title}</p>
        <button onClick={handleDelete} className='ml-auto' type="submit">
          <img src={TrashIcon} alt="Trash Icon" />
        </button>
      </div>
    )
}