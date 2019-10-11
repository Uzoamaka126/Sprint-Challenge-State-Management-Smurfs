import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actionCreators';
import SingleSmurf from './SingleSmurf'

export function SmurfsList(props) {
    const { smurfs } = useSelector( state => state);
    const [getAllSmurfs]
    // useEffect(() => {

    // })
    return (
        <div>
            <ul>
                <li>
                    <SingleSmurf />
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state,
    }
}

export default connect(mapStateToProps, actions)(SmurfsList);