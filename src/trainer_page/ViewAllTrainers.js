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
    }
    viewTrainer(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editTrainer(id){
        this.props.history.push(`/add-employee/${id}`);
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
        <br></br>
        <div className = "ph4 pb4">
          <div className = "overflow-auto">
              <table className = "f5 w-100 mw8 center" cellspacing="0">
                  <thead>
                      <tr>
                          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> First Name</th>
                          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> Last Name</th>
                          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> Age</th>
                          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> Gender</th>
                          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> Certificate</th>
                      </tr>
                  </thead>
                  <tbody className="lh-copy">
                      {
                          this.state.employees.map(
                              employee => 
                              <tr key = {employee.id}>
                                    <td className="pv3 pr3 bb b--black-20"> { employee.firstName} </td>   
                                    <td className="pv3 pr3 bb b--black-20"> {employee.lastName}</td>
                                    <td className="pv3 pr3 bb b--black-20"> {employee.emailId}</td>
                                    <td className="pv3 pr3 bb b--black-20">
                                        <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
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
