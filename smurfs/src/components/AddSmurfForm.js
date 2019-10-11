import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actionCreators';

export function AddSmurfForm(props) {
    return (
        <div>
            <form>
                <h3>Create your own Smurf Here</h3>
                <div className="form-row">
                    <div className="input-group">
                        <label>Smurf Name</label>
                        <input />
                    </div>
                    <div className="input-group">
                        <label>Smurf Age</label>
                        <input />
                    </div><div className="input-group">
                        <label>Smurf Height(in cm)</label>
                        <input />
                    </div>
                    <div className="input-group">
                        <button>Create Smurf</button>
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