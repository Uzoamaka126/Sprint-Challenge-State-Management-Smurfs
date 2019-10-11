import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actions from '../state/actionCreators';
import SingleSmurf from './SingleSmurf'

const SmurfsList = () => {
    const { smurfs } = useSelector( state => state.smurfs);
    const dispatch = useDispatch();
    // console.log(smurfs);
    // const [getAllSmurfs]
    useEffect(() => {
        dispatch(actions.getAllSmurfs())
    }, [])
    return (
        <div>
            <ul className="smurf-card-list">
               {
                   smurfs.map((smurf) => (
                    <SingleSmurf 
                        key={smurf.id}
                        name={smurf.name}
                        age={smurf.age}
                        height={smurf.height}
                    />
                   ))
               }
            </ul>
        </div>
    )
}


// const mapStateToProps = state => {
//     return {
//         state,
//     }
// }

// export default connect(mapStateToProps, actions)(SmurfsList);
export default SmurfsList;