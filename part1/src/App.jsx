const Header = (props) => {
  return (
    <div>
      <p>The name of the course is {props.course}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name}{props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercise={props.exercises1}/>
      <Part name={props.part2} exercise={props.exercises2}/>
      <Part name={props.part3} exercise={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>The total number of exercises is {props.exercise}</p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercise1={exercises1}
        part2={part2} exercise2={exercises2}
        part3={part3} exercise3={exercises3}
      />
      
      <Total exercise={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App 