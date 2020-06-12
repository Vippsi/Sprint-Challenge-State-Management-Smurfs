import React from 'react'

const Smurf = ({ smurf }) => {

    return(
        <div>
            <h3>{smurf.name}</h3>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
        </div>
    )

}
export default Smurf