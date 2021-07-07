import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getData, newSmurf } from '../actions'

const initialSmurf = {
    name: '',
    age: '',
    height:''
}
const SmurfForm = (props) => {

    const [newSmurf, setNewSmurf ] = useState(initialSmurf)
    // const dispatch = useDispatch()
    const handleChanges = e => {
        const name = e.target.name
        const value = e.target.value

        setNewSmurf({...newSmurf, [name]:value})
    }

    useEffect(() => {
        getData()
    }, [newSmurf])

    const handlePostData = e => {
        e.preventDefault()
        console.log(newSmurf)
        props.newSmurf(newSmurf)
        setNewSmurf(initialSmurf)
    }

    return (
        <>
        <form>
            <label> Name: 
                <input
                type='text'
                name='name'
                value={newSmurf.name}
                onChange={handleChanges} />
            </label>
            <label> Age: 
                <input
                type='text'
                name='age'
                value={newSmurf.age}
                onChange={handleChanges} />
            </label>
            <label> Height: 
                <input
                type='text'
                name='height'
                value={newSmurf.height}
                onChange={handleChanges} />
            </label>
            <button onClick={handlePostData}>Make a Smurf</button>
        </form>
        </>
    )
}

const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, { newSmurf })(SmurfForm)