import React, {useState} from 'react';
import {IUser} from "./IUser";
import {UserService} from "./UserService";

export const Registration: React.FC = () => {

    const [user, setUser] = useState<IUser>({
        username: "",
        email: "",
        password: "",
        designation: "",
        gender: "",
        bio: "",
        terms: false
    });

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const onChangeTerms = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [event.target.name]: event.target.checked
        });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        UserService.sendRegister(user);
    };

    return (
        <>
            {/* <pre>{JSON.stringify(user)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-warning">
                                <p className="h3">Registration</p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={event => handleSubmit(event)}>
                                    <div className="mb-2">
                                        <input
                                            value={user.username}
                                            name={'username'}
                                            onChange={event => onInputChange(event)}
                                            id="username" type="text" className="form-control"
                                            placeholder="Username"/>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            value={user.email}
                                            name={'email'}
                                            onChange={event => onInputChange(event)}
                                            type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            value={user.password}
                                            name={'password'}
                                            onChange={event => onInputChange(event)}
                                            type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="mb-2">
                                        <select
                                            value={user.designation}
                                            name={'designation'}
                                            onChange={event => onInputChange(event)}
                                            className="form-control">
                                            <option value="">Select Designation</option>
                                            <option value="Software Engineer">Software Engineer</option>
                                            <option value="Sr.Software Engineer">Sr.Software Engineer</option>
                                            <option value="Tech Lead">Tech Lead</option>
                                            <option value="Manager">Manager</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-check-label">Gender</label>
                                        <input
                                            value={'Male'}
                                            name={'gender'}
                                            onChange={event => onInputChange(event)}
                                            type="radio" className="form-check-input"/>
                                        <label className="form-check-label">Male</label>
                                        <input
                                            value={'Female'}
                                            name={'gender'}
                                            onChange={event => onInputChange(event)}
                                            type="radio" className="form-check-input"/>
                                        <label className="form-check-label">Female</label>
                                    </div>
                                    <div className="mb-2">
                                        <textarea
                                            value={user.bio}
                                            name={'bio'}
                                            onChange={event => onInputChange(event)}
                                            className="form-control" rows={3} placeholder="Bio"></textarea>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            name={'terms'}
                                            onChange={event => onChangeTerms(event)}
                                            type="checkbox" className="form-check-input"/>
                                        <label className="form-check-label">Accepts Terms & Conditions</label>
                                    </div>
                                    <div className="mb-2">
                                        <input type="submit" value="Register"
                                               className="btn btn-warning"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Registration;