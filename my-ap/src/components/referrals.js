import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
const Referral = props =>(
    <tr>
        <td>{props.referral.referrals}</td>
        <Link to={"/edit"+props.referral._id}>Edit</Link>
    </tr>
)
export default class Referrals extends Component {
constructor(props){
    super(props);
    this.state = {referrals: []};
}
componentDidMount(){
    axios.get('http://localhost:4000/todos')
    .then(response => {
        this.setState({referrals: response.data});
    })
    .catch(function (error) {
        console.log(error);
    })
}

referralsList(){
    return this.state.referrals.map((currentItem, i)=>{
        return <Referral referral={currentItem} key={i} />
    })
}
    render(){
        return(
            <div>
                <h3> Referral List</h3>
                <table className="table table striped">
                    <thead>
                        <tr>
                            <th>Referrals</th>
                            {/* Clicks */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.referralsList()}
                    </tbody>
                </table>
            </div>
        )
    }
}