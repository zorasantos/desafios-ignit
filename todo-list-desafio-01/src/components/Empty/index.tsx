import emptyIcon from '../../assets/emptyIcon.svg'

export const Empty = () => {
  return (
      <div className="flex flex-col items-center">
        <img src={emptyIcon} width={56} height={56} alt="Empty Icon" />
        <p className='text-[#808080] text-[16px] font-bold'>
          Você ainda não tem tarefas cadastradas
        </p>
        <p className='text-[#808080] text-[15px] font-extralight'>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    )
}