import { useState } from 'react';
import addIcon from '../../assets/addIcon.svg'

type FormProps = {
  onSubmit: (value: string) => void;
}

export const Form = ({ onSubmit }: FormProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(value);
  };

  return (
      <form onSubmit={handleSubmit} className='relative flex justify-center gap-2 mb-5 top-[-25px]'>
        <input
          onChange={handleChange}
          className="w-[638px] h-[54px] rounded-[8px] text-[#FFFFFF] caret-white p-5 bg-[#262626]"
          placeholder="Adicione uma nova tarefa"
          type="text"
        />
       <button  type="submit" className="flex justify-center items-center gap-2 bg-[#1E6F9F] hover:bg-[#1E6F9F]/90 text-[#FFFFFF] w-[90px] h-[52px] rounded-[8px] p-[16px]">
        Criar
        <img src={addIcon} alt="Icon button" />
      </button>
      </form>
    )
}