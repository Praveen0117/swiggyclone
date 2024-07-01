import React from "react"


class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            count1: 1
        }
    }
    
    

    render(){
        const {count, count1} = this.state

        return(
            <div>
                <h1>Count : {count}</h1>
                <h1>Count1 : {count1}</h1>
                <h1>Name: Praveen Polaki</h1>
                <h1>Location: Hyderabad</h1>
            </div>
        )
    }
}

export default User