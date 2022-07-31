import React from 'react'
import './select.css'

interface SelectProps extends React.HTMLProps<HTMLSelectElement>{
  text: string;
  options:string[] | number[];
  onBlur: (data:any) => void;
}



const Select:React.FC<SelectProps> = (props) => {

   
  return (
    <>
      <div className='selectWrapper mb-20'>
        <label className='lable' htmlFor={props.id}>
          {props.text}
        </label>

        <select
         {...props}
          className="selector"
          onBlur={(e)=>props.onBlur(e.target.value)}>
          {props.options &&
            props.options.map((option, index) => {
              return <option key={Number(new Date()) + index}>{option}</option>
            })}
        </select>
      </div>
    </>
  )
}
export { Select }