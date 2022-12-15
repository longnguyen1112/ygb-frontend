import React, { Component } from 'react'
import TrainerService from '../services/TrainerService';
import { withRouter } from '../common/with-router';

class UpdateTrainer extends Component {
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

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeCertificateHandler = this.changeCertificateHandler.bind(this);
        this.UpdateTrainer = this.UpdateTrainer.bind(this);
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }

    changeCertificateHandler= (event) => {
        this.setState({certificate: event.target.value});
    }

    componentDidMount(){
        TrainerService.getTrainerById(this.props.router.params.id).then((res)=>{
            console.log(res);
            let trainer = res.data;
            this.setState({ 
                firstName : trainer.firstName,
                lastName : trainer.lastName,
                age : trainer.age,
                gender : trainer.gender,
                certificate : trainer.certificate
            })
        });
    }
    UpdateTrainer = (e) => {
        e.preventDefault();
        let trainer = {firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, gender: this.state.gender, certificate: this.state.certificate};
        console.log('trainer => ' + JSON.stringify(trainer));

        TrainerService.updateTrainer(trainer,this.props.router.params.id);
        window.location.href = "/admin/trainers";
    }

    render() {
        return (
            <div>
            <h2 className='tc mt3'>Update Trainer</h2>
            <div className="pa1 black-80">
                <form className="measure center ba pa4">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <div className="mt1">
                        <label className="db fw6 lh-copy f6">First Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="firstName"  id="firstName"
                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Last Name</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="lastName"  id="lastName"
                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Age</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="age"  id="age"
                        value={this.state.age} onChange={this.changeAgeHandler}/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Gender</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="gender"  id="gender"
                        value={this.state.gender} onChange={this.changeGenderHandler}/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Certificate</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="certificate"  id="certificate"
                        value={this.state.certificate} onChange={this.changeCertificateHandler}/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit"
                    onClick={this.UpdateTrainer}/>
                    </div>
                </form>
            </div>
          </div>
        )
    }
}
export default withRouter(UpdateTrainer);