
const Header = ({title}) => {

    const onClick = () => {
        console.log('You Clicked')
    }
    return (
        <header style={whole_header}>
            <h1 style= {HeadingStyle}> {title} </h1>
            <button style = {ButtonStyle} onClick = {onClick} > Add </button>
            
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker'
}

const HeadingStyle = {
    color: 'red',
    width: '95%'
     
}
const ButtonStyle = {
    backgroundColor: 'green',
     borderRadius: '18px',
    // padding: '20px',
    color: 'white',
    width: '10%'
}
const whole_header = {
    display: 'flex',
    backgroundColor: 'lightpink',


}

export default Header
