import './select.css'


const Select = ({ options, onBlur, name, id, text, className= ''}) => {
    return (
      <>
        <div className='selectWrapper mb-20'>
            <label className='lable' htmlFor={id}>
              {text}
            </label>
        <select
          name={name}
          id={id}
          className = "selector"
          onBlur={e=>onBlur(e.target.value)}>
          {options &&
            options.map((option, index) => {
              return <option key={Number(new Date())+ index}>{option}</option>
            })}
        </select>
        </div>
      </>
    )
  }
  export { Select }