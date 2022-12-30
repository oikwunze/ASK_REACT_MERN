import React, {useState} from 'react';
import {ProductService} from "../services/ProductService";
import {IProduct} from "../models/IProduct";

export const ProductCart: React.FC = () => {

    const [watches, setWatches] = useState<IProduct[]>(ProductService.getAllProducts());

    const clickIncrQty = (productId: string): void => {
        const theProducts = watches.map(watch => {
            if (watch.id === productId) {
                return {
                    ...watch,
                    qty: watch.qty + 1
                }
            }
            return watch;
        });
        setWatches(theProducts);
    };

    const clickDecrQty = (productId: string): void => {
        const theProducts = watches.map(watch => {
            if (watch.id === productId) {
                return {
                    ...watch,
                    qty: watch.qty - 1 > 0 ? watch.qty - 1 : 1
                }
            }
            return watch;
        });
        setWatches(theProducts);
    };

    const calculateGrandTotal = (): number => {
        let total: number = 0;
        for (let watch of watches) {
            total += (watch.price * watch.qty);
        }
        return total;
    };

    const clickDeleteProduct = (productId: string): void => {
        setWatches(watches.filter(watch => watch.id !== productId));
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Watch Kart</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum dolorum natus
                            reiciendis reprehenderit. Consectetur distinctio enim in incidunt inventore nulla
                            perspiciatis, possimus quam quis rem repellat repellendus sunt vitae?</p>
                    </div>
                </div>
            </div>
            {
                watches.length > 0 ? <>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table className="table table-striped table-hover text-center shadow-lg">
                                    <thead className="bg-light text-dark">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        watches.map((watch, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{watch.id}</td>
                                                    <td>
                                                        <img src={watch.imageUrl} alt="" width={50} height={50}/>
                                                    </td>
                                                    <td>&#8377;{watch.price.toFixed(2)}</td>
                                                    <td>
                                                        <i onClick={() => clickDecrQty(watch.id)}
                                                           className="bi bi-dash-circle-fill me-2 text-success"></i>
                                                        {watch.qty}
                                                        <i onClick={() => clickIncrQty(watch.id)}
                                                           className="bi bi-plus-circle-fill ms-2 text-success"></i>
                                                    </td>
                                                    <td>&#8377;{(watch.price * watch.qty).toFixed(2)}</td>
                                                    <td>
                                                        <button className="btn btn-danger"
                                                                onClick={() => clickDeleteProduct(watch.id)}>
                                                            <i className="bi bi-trash-fill"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr>
                                        <td colSpan={3}></td>
                                        <td>Grand Total :</td>
                                        <td>&#8377;{calculateGrandTotal().toFixed(2)}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </> : <>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <p className="h4 text-danger">---------------- No Records found ---------------- </p>
                            </div>
                        </div>
                    </div>
                </>
            }

        </>
    )
};
export default ProductCart;