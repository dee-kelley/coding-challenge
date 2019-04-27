import React, {Component} from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props){
        super(props);
        this.onChangeReferral = this.onChangeReferral.bind(this);
        this.state={
            referral:'',
            clicks: 0
        }
    
    }

    onChangeReferral(e){
        this.setState({
            referral: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        console.log("Submitted");

        const newRef = {
            referral: this.state.referral,
            clicks: this.state.clicks
        }

        axios.post('http://localhost:4000/referrals/add', newRef).then(res => console.log(res.data));
        this.setState({
            referral: ''
        })
    };

    handleClick(){
        this.setState((prevState)=>({
            clicks: prevState.clicks + 1
        }))
    }
    render(){
        return(
            <div style={{marginTop: 20}}>
                <p>CREATE</p>
                <form onSubmit={this.onSubmit}>
                    <div className = "form-group">
                        <label>Description:</label>
                        <input type="text"
                        className="form-control"
                        value={this.state.referral}
                        onChange={this.onChangeReferral}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-primary" />
                    </div>
                </form>
                <button onClick={this.handleClick.bind(this)}>Upvote {this.state.clicks}</button>
            </div>
        )
    }
}