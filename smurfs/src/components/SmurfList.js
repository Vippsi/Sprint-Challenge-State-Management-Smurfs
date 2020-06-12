import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions'
import Smurf from './Smurf'

const SmurfList = (props) => {

    useEffect(() => {
        props.getData()
    }, [])

   
    return(
        <div>
        <div>{props.smurfs.map(smurf => (
           <Smurf smurf={smurf}/>
        ))}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getData })(SmurfList)