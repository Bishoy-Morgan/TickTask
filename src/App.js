import { React, useState } from 'react';
import Main from './components/Main'
import Footer from './components/Footer';
import List from './components/List'
import AddTask from './components/AddTask';


function App() {
  const [showTask, setShowTask] = useState(false) 
  const [ list, setList ] = useState([])

// Delete Task 
  const deleteTask = (id) => {
    setList(list.filter((item) => item.id !== id  ))
  }

  // Toggle Task
  const toggleTask = (id) => {
    setList(list.map((item) => item.id === id ? 
    {...item, reminder: !item.reminder } : item ))
  }

  //Add new task
  const addNewTask = (i) => {
    const id = Math.floor(Math.random() * 1000)
    const newTask = {id, ...i}
    setList( [...list, newTask] )
  }
  return (
        <main>
          <section className='container-A'>
            <h2>Organize your work and life, finally.</h2>
            <h5>Become focused, organized, and calm with <span>TickTask</span> . The world<sup></sup>s #1 task manager and to-do list app.</h5>
          </section>
          <section className='container-B'>
            <Main 
              mainTitle='Tick Task'
              addButton={ () => setShowTask(!showTask) }
              buttonStyle={showTask}
            />
            { showTask && <AddTask onAdd={addNewTask} /> }
            {list.length > 0 ? 
            ( <List 
                list={list}
                onDelete={deleteTask}
                onToggle={toggleTask}
              /> ) : (<div className='no-tasks'><h4>Simply press Add and start organize your life</h4></div>) }
          </section>
          <Footer />
        </main>
      );
}




export default App;



