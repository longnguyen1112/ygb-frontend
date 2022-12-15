  import React, { Component } from 'react'
import TrainerService from '../services/TrainerService';

export default class ViewAllTrainers extends Component {
    constructor(props){
        super(props)

        this.state = {
            trainers:[]
        }

        this.editTrainer = this.editTrainer.bind(this);
        this.deleteTrainer = this.deleteTrainer.bind(this);
    }

    deleteTrainer(id){
      TrainerService.deleteTrainer(id).then( res => {
          this.setState({trainers: this.state.trainers.filter(trainers => trainers.id !== id)});
      });
      window.location.href = "/admin/trainers";
    }
    viewTrainer(id){
      window.location.href = `/admin/view/${id}`;
    }
    editTrainer(id){
        //this.props.history.push(`/update/${id}`);
        window.location.href = `/admin/update/${id}`;
    }

    componentDidMount(){
        TrainerService.getTrainers().then((res) => {
            this.setState({ trainers: res.data});
        });
    }

  render() {
    return (
      <div>
        <h2 className="tc mt3">Trainers List</h2>
        <div className = "ph4 pb4">
          <div className = "overflow-auto">
              <table className = "f5 w-100 mw8 center" cellspacing="0">
                  <thead>
                      <tr>
                          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> First Name</th>
                          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> Last Name</th>
                          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> Gender</th>
                          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> Age</th>
                          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> Certificate</th>
                      </tr>
                  </thead>
                  <tbody className="lh-copy">
                      {
                          this.state.trainers.map(
                              trainer => 
                              <tr key = {trainer.trainer_id}>
                                    <td className="pv3 pr3 bb b--black-20"> { trainer.firstName} </td>   
                                    <td className="pv3 pr3 bb b--black-20"> {trainer.lastName}</td>
                                    <td className="pv3 pr3 bb b--black-20"> {trainer.gender}</td>
                                    <td className="pv3 pr3 bb b--black-20"> {trainer.age}</td>
                                    <td className="pv3 pr3 bb bt b--black-20"> {trainer.certificate}</td>
                                    <td className="pv3 pr3 bb bt b--black-20">
                                        <button onClick={ () => this.editTrainer(trainer.trainer_id)} className="f6 link dim br1 ba ph3 pv2 mb2 dib mid-gray">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTrainer(trainer.trainer_id)} className="f6 link dim br1 ba ph3 pv2 mb2 dib mid-gray">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewTrainer(trainer.trainer_id)} className="f6 link dim br1 ba ph3 pv2 mb2 dib mid-gray">View </button>
                                    </td>
                              </tr>
                          )
                      }
                  </tbody>
              </table>
          </div>           
        </div>
      </div>
    )
  }
}
