import { useState } from 'react'
import { BsUiChecks } from "react-icons/bs";
import { BsFillCalendar2DayFill } from "react-icons/bs";


const AddTask = ( { onAdd } ) => {
    const [text, setText] = useState('') 
    const [day, setDay] = useState('') 
    const [reminder, setReminder] = useState(false) 
    const [alertMsg, setAlertMsg] = useState(false)

    const onSubmit = (i) => {
        i.preventDefault()

        if (!text || !day) {
            setAlertMsg(!alertMsg)
            return 
        }

        onAdd ( { text, day, reminder} )

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <> 
        {alertMsg && 
        (<div 
            className='alert-msg'>
                <h2>We can not complete process as you must add a task title and day or time then you can press <b>Save Task</b> button.</h2>
                <button
                className='btn'
                    onClick={() => setAlertMsg(!alertMsg)}
                    >Ok</button>
        </div>)}
            <form 
                className='add-form' 
                onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Task</label>
                    <input 
                        type='text' 
                        placeholder='Task title' 
                        value={text}
                        onChange={(item) => setText(item.target.value)}
                    />
                    <BsUiChecks className='task-icon'/>
                </div>
                <div 
                    className='form-control'>
                    <label>Day and Time</label>
                    <input 
                        type='text' 
                        placeholder='Day and time' 
                        value={day}
                        onChange={(item) => setDay(item.target.value)}
                    />
                    <BsFillCalendar2DayFill className='task-icon'/>
                </div>
                <div 
                    className='form-control form-control-check'>
                    <input 
                        type='checkbox'
                        checked={reminder}
                        value={reminder}
                        onChange={(item) => setReminder(item.currentTarget.checked)}
                    />
                    <label>Reminder</label>
                </div>
                    <input 
                        type='submit' 
                        className='btn btn-block' 
                        value='Save Task'
                    />
            </form>
        </>
    )
}

export default AddTask
