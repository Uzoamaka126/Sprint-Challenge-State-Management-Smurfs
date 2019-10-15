import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actionCreators';
import { useDispatch } from 'react-redux';

const initialFormState = {
    name: '',
    age: '',
    height: '',
    id: null
};

export function AddSmurfForm({ postForm, onInputChange, }) {
    const dispatch = useDispatch();
    const [form, setForm] = useState(initialFormState);
    const [smurf, setSmurf] = useState({});

    // useEffect(() => {
    //     dispatch(actions.postForm(smurf), [smurf])
    // })
    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        // dispatch(actions.onInputChange(event.target));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.postForm(form));
        setForm(initialFormState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Create your own Smurf Here</h3>
                <div className="form-row">
                    <div className="input-group">
                        <label>Smurf Name</label>
                        <input name="name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Smurf Age</label>
                        <input name="age" value={form.age} onChange={handleChange} />
                    </div><div className="input-group">
                        <label>Smurf Height(in cm)</label>
                        <input name="height"value={form.height} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <button onClick={() => {}}>Create Smurf</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state,
    }
}

export default connect(mapStateToProps, actions)(AddSmurfForm);