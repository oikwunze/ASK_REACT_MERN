import React, {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const clickIncr = () => {
        setCount(count + 1);
    };

    const clickDecr = () => {
        setCount(count - 1 > 0 ? count - 1 : 0);
    };

    const clickIncrBy = (value) => {
        setCount(count + value);
    };

    const clickDecrBy = (value) => {
        setCount(count - value > 0 ? count - value : 0);
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="display-2">{count}</p>
                                <button className="btn btn-success me-2" onClick={clickIncr}>increment</button>
                                <button className="btn btn-danger" onClick={clickDecr}>decrement</button><br/><br/>
                                <button className="btn btn-success me-2" onClick={() => clickIncrBy(5)}>increment By 5</button>
                                <button className="btn btn-danger" onClick={() => clickDecrBy(5)}>decrement By 5</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Counter;