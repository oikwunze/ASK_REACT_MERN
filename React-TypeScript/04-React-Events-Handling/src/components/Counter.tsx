import React, {useState} from 'react';

export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const clickIncr = (): void => {
        setCount(count + 1);
    };

    const clickDecr = (): void => {
        setCount(count - 1 > 0 ? count - 1 : 0);
    };

    const clickIncrBy = (value: number): void => {
        setCount(count + value);
    };

    const clickDecrBy = (value: number): void => {
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
                                <button className="btn btn-danger" onClick={clickDecr}>decrement</button>
                                <br/><br/>
                                <button className="btn btn-success me-2" onClick={() => clickIncrBy(5)}>increment By 5
                                </button>
                                <button className="btn btn-danger" onClick={() => clickDecrBy(5)}>decrement By 5
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Counter;