import React, {useState} from 'react';

interface IMobile {
    brand: string;
    price: number;
    color: string;
}

export const MobileCounter: React.FC = () => {
    const [mobile, setMobile] = useState<IMobile>({
        brand: "Apple",
        price: 35000,
        color: "white"
    });

    const clickIncr = (): void => {
        setMobile({
            ...mobile,
            price: 45000,
            color: 'Black'
        })
    };

    const clickDecr = (): void => {
        setMobile({
            ...mobile,
            price: 25000,
            color: 'white'
        })
    };


    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <pre>{JSON.stringify(mobile)}</pre>
                                <p className="display-2">
                                </p>
                                <button className="btn btn-success me-2" onClick={clickIncr}>increment</button>
                                <button className="btn btn-danger" onClick={clickDecr}>decrement</button>
                                <br/><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default MobileCounter;