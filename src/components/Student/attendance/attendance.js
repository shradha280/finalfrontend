import React, { Component } from "react";
import { Table } from 'reactstrap';
import './attendance.css'

class Attendance extends Component{
    render() {
        return (
         
            <div >

            

            <div style={{textAlign:"center"}}>  
                <h1 id='title'><b>ATTENDANCE</b></h1>
            </div>

            <div>
                <select className="form-control" style={{marginLeft:'2%',width:"30%"}} type="text" placeholder="Select Semester">
                    <option>Select Semester</option>
                    <option>Semester 1</option>
                    <option>Semester 2</option>
                    <option>Semester 3</option>
                    <option>Semester 4</option>
                    <option>Semester 5</option>
                    <option>Semester 6</option>
                    <option>Semester 7</option>
                    <option>Semester 8</option>
                </select>
            </div>

            <br/>

                <Table id="contents" striped bordered hover>
                    <thead>
                        <tr className="first">
                            <th>S. No.</th>
                            <th>Subject</th>
                            <th>Total no. of lectures</th>
                            <th>No. of lectures attended</th>
                            <th>Attendance(%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Subject Name</td>
                            <td>10</td>
                            <td>8</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>

                <div id="bottom">
                    <h5>Extra attendance:</h5>
                    <h5>Attendance deduction as penalty:</h5>
                    <h5>Final attendance:</h5>
                </div>
            
            </div>
                
                
           
        );

        
    }
}

export default Attendance;