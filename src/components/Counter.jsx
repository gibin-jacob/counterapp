export const Counter = ({ count, onIncrement, onDecrement }) => {
    // console.log(count);

    return (

        <div>

            <h1>Count :{count}</h1>
            <button className="Incrementclass" onClick={onIncrement}> Increment </button>
            <button className="Decrementclass" onClick={onDecrement}> Decrement </button>
        </div>
    );
};
