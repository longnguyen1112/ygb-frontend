import React, { Component } from 'react'
import TrainerService from '../services/TrainerService'
import { withRouter } from '../common/with-router'

class ViewTrainer extends Component {
    constructor(props)
    {
        super(props)

        this.state = {
            trainer_id : null,
            firstName : '',
            lastName : '',
            age : 0,
            gender : '',
            certificate:''
        }
    }

    componentDidMount(){
        TrainerService.getTrainerById(this.props.router.params.id).then(res=>{
            let trainer = res.data;
            console.log(trainer);
            this.setState({
                firstName : trainer.firstName,
                lastName : trainer.lastName,
                age : trainer.age,
                gender : trainer.gender,
                certificate : trainer.certificate
            })
        })
    }

    render() {
        return (
        <div>
            <div class="db center mw5 black link dim"
                title="Frank Ocean's Blonde on Apple Music">
            
            <img class="db ba b--black-10"
                    alt ="sample pic"
                    src="https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png?resize=1200:*"
            />
            
            <dl class="mt2 f6 lh-copy">
                <dt class="clip">Name</dt>
                <dd class="ml0 fw9 f3">{this.state.firstName} {this.state.lastName}</dd>
                <dt class="clip">Age</dt>
                <dd class="ml0 gray f5">Age: {this.state.age}</dd>
                <dt class="clip">Gender</dt>
                <dd class="ml0 gray f5">Gender: {this.state.gender}</dd>
                <dt class="clip">Certificate</dt>
                <dd class="ml0 gray f5">Any Certificate: {this.state.certificate}</dd>
            </dl>
            </div>
        </div>
        )
    }
}

export default withRouter(ViewTrainer);