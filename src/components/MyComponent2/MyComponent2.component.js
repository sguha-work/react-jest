function MyComponent2(props) {
    return (
        <div>
            This is MyComponent2, here you can view task
            <ul>
                {props.taskList.map((task, index) => (<li key={index}>{task}</li>))}
            </ul>
        </div>
    );
}
export default MyComponent2;