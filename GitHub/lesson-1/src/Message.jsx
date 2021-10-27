import './App.css';

function Message(props){
    const { homework } = props;
    return (
    <h1 className="Homework">{homework}</h1>
    )
}

export default Message;
