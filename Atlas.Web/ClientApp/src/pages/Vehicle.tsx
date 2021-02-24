import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';


import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';



// At runtime, Redux will merge together...


const createbtn = {
  fontSize: "13px",
  color: "#fff",
  background: "#000",
  border: "none",
  padding: "5px 15px",
}

const editbtn = {
  cursor: "pointer",
  fontSize: "13px",
  color: "#fff",
  background: "#000",
  border: "none",
  padding: "5px 15px",
  right: 0,
  top: "40px"
}

const lab = {
  fontSize: "11px",
  height: "15px",
  margin: "15px 0",
}

const fileupload = {
  display: "inline-block",
  width: "100%",
  border: "1px solid #ced4da",
  borderRadius: "0.25rem",
  cursor: "pointer",
  top: "-40px",
  fontSize: "1rem",
  padding: "0.375rem 0.75rem",

}

interface IState {
    inputshow: boolean,
    vehicleID: string,
    name: string,
    bandModel: string,
    age: string,
    condition: string,
    maxPax: string,
    licensPlate: string,
    insurancePolicyNo: string,
    equipmentDescription: string,
    comments: string,
    organization: null,
    primaryDriver: null,
    responsibleForMaintenance: null,
    document: string
}

class Vehicle extends React.Component<IState> {
  state: IState = {
    inputshow: false,
    vehicleID: "",
    name: "",
    bandModel: "",
    age: "",
    condition: "",
    maxPax: "",
    licensPlate: "",
    insurancePolicyNo: "",
    equipmentDescription: "",
    comments: "",
    organization: null,
    primaryDriver: null,
    responsibleForMaintenance: null,
    document: ""
  };

  // This method is called when the component is first added to the document
  public componentDidMount() {
    this.ensureDataFetched();
  }


  createVehicle = () => {
      this.setState({
          inputshow: true,
          vehicleID: "",
          name: "",
          bandModel: "",
          age: "",
          condition: "",
          maxPax: "",
          licensPlate: "",
          insurancePolicyNo: "",
          equipmentDescription: "",
          comments: "",
          organization: null,
          primaryDriver: null,
          responsibleForMaintenance: null
       });
  }


    editVehicle = (id: string) => {
        var vm = this;
        const headers = { 'Content-Type': 'application/json' };
        fetch(`https://localhost:44348/api/vehicles/` + id, { headers })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                vm.setState({
                    vehicleID: id,
                    bandModel: data.bandModel,
                    name: data.name,
                    age: data.age,
                    condition: data.condition,
                    maxPax: data.maxPax,
                    licensPlate: data.licensPlate,
                    insurancePolicyNo: data.insurancePolicyNo,
                    equipmentDescription: data.equipmentDescription,
                    comments: data.comments,
                    inputshow: true
                })
            });
    }

    uploadfile = (e: any) => {
        this.setState({ document: e.target.files[0].name })

        var bytes: any;
        var fileList = e.target.files;
        console.log(e.target);
        var reader = new FileReader();
        if (reader && fileList && fileList.length) {
            reader.readAsArrayBuffer(e.target.files[0]);
            reader.onload = function () {
                bytes = reader.result;
                //console.log("bytes", new Uint8Array(bytes));
                var base64String = btoa(
                    new Uint8Array(bytes)
                        .reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
                console.log(e);
                const reqData = {
                    "fileName": fileList[0].name,
                    "fileContent": base64String,
                    "createdDateTime": new Date(),
                    "modifiedDateTime": new Date()
                }
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(reqData)
                };

                fetch(`https://localhost:44348/api/files/AddUpdateFile`, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log("data", data);
                    });

            };
        }
    }

  public render() {
    return (
      <React.Fragment>
        <NavMenu />
        {this.renderVehicles()}
        <Footer />
      </React.Fragment>
    );
  }

  private ensureDataFetched() {
    //this.props.requestVehicles();
  }

  openAccordion = (event) => {
    event.target.classList.toggle("accordion-active");
    var panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  private renderVehicles() {
    return (
      <section id="content">
        <div className="content-wrap" style={{padding: "170px 0", minHeight: "520px"}}>
            <div className="container">
                <div className="m-auto" style={{display: this.state.inputshow ? 'none' : '', maxWidth: "600px"}}>
                    <button
                        className="float-right font-weight-bold mb-3"
                        style={createbtn}
                        onClick={this.createVehicle}
                    >Add vehicle</button>

                    <button className="accordion" onClick={(e) => this.openAccordion(e)}>
                        section
                    </button>
                    <div className="accordion-panel">
                        <table  className="table table-responsive-sm">
                            <tbody>
                                <tr>
                                    <td>Band & model</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Ownership</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Condition</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Maxium capacity</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>License plate number</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Insurance policy number</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Primary location</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Primary driver</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Responsible for maintenance</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Equipment in vehicle</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Comments/ reminders</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <button
                            className="font-weight-bold mb-3"
                            style={createbtn}
                            onClick={() =>this.editVehicle("ud")}
                        >Edit vehicle</button>
                    </div>
                </div>

                <div style={{display: this.state.inputshow ? '' : 'none'}}>
                    <h3 style={{margin: "1.8rem auto", width:"100%", textAlign:"center"}}>
                        {this.state.vehicleID === "" ? "Add" : "Edit"} vehicle
                    </h3>
                    <div className="col-md-12">
                        <div className="col-md-4 float-left">
                            <label style={ lab }>Vehicle name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange = {(e: React.FormEvent<HTMLInputElement>) => {this.setState({name: e.currentTarget.value})}}
                            />
                        </div>
                        <div className="col-md-4 float-left">
                            <label style={ lab }>Band & model</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.bandModel}
                                onChange = {(e: React.FormEvent<HTMLInputElement>) => {this.setState({bandModel: e.currentTarget.value})}}
                            />
                        </div>
                        <div className="col-md-4 float-left">
                            <label style={ lab }>Age</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.age}
                                onChange = {(e: React.FormEvent<HTMLInputElement>) => {this.setState({age: e.currentTarget.value})}}
                            />
                        </div>
                        <div className="col-md-4 float-left">
                            <label style={ lab }>Ownership</label>
                            <div className="btn-group w-100">
                                <button type="button" className="btn btn-secondary">Owend</button>
                                <button type="button" className="btn btn-secondary">Leased</button>
                                <button type="button" className="btn btn-secondary">Rented</button>
                            </div>
                        </div>
                        <div className="col-md-4 float-left">
                            <label style={ lab }>Condition</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.condition}
                                onChange = {(e: React.FormEvent<HTMLInputElement>) => {this.setState({condition: e.currentTarget.value})}}
                            />
                        </div>
                        <div className="col-md-4 float-left">
                            <label style={ lab }>Maximum capacity</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.maxPax}
                                onChange = {(e: React.FormEvent<HTMLInputElement>) => {this.setState({maxPax: e.currentTarget.value})}}
                            />
                        </div>
                        <div className="col-md-4 float-left">
                            <label style={ lab }>License plate number</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.licensPlate}
                                onChange = {(e: React.FormEvent<HTMLInputElement>) => {this.setState({licensPlate: e.currentTarget.value})}}
                            />
                        </div>
                        <div className="col-md-4 float-left">
                            <label style={ lab }>Insurance policy number</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.insurancePolicyNo}
                                onChange = {(e: React.FormEvent<HTMLInputElement>) => {this.setState({insurancePolicyNo: e.currentTarget.value})}}
                            />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="col-md-6 float-left">
                            <label style={ lab }>Primary driver</label>
                            <select className="selectpicker" data-live-search="true">
                                <option>option1</option>
                                <option>option2</option>
                                <option>option3</option>
                            </select>
                        </div>
                        <div className="col-md-6 float-left">
                            <label style={ lab }>Responsible for maintenance</label>
                            <select className="selectpicker" data-live-search="true">
                                <option>option1</option>
                                <option>option2</option>
                                <option>option3</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-8 overflow-auto mb-2">
                        <div className="col-md-12 float-left">
                            <label style={ lab }>Equipment in vehicle</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.equipmentDescription}
                                onChange = {(e: React.FormEvent<HTMLInputElement>) => {this.setState({equipmentDescription: e.currentTarget.value})}}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 overflow-auto">
                        <div className="col-md-4 float-left">
                            <label style={ lab }>Comment / reminders</label>
                            <textarea
                                className="form-control"
                                value={this.state.comments}
                                onChange = {(e: React.FormEvent<HTMLTextAreaElement>) => {this.setState({comments: e.currentTarget.value})}}
                            ></textarea>
                        </div>
                        <div className="col-md-4 float-left">
                            <label style={ lab }>Documents</label>
                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                style = {{position: "relative", opacity: 0, zIndex: 99, cursor: "pointer"}}
                                onChange={(e: React.FormEvent<HTMLInputElement>) => this.uploadfile(e)}
                                />
                            <span
                                className="position-relative"
                                style={fileupload}
                            >{(this.state.document !== "")?this.state.document:"Upload File"}</span>
                        </div>
                        <div className="col-md-4 float-left position-relative">
                            <button
                                className="font-weight-bold position-absolute mr-4"
                                style={editbtn}
                                onClick={() => this.setState({inputshow: false})}
                            >{this.state.vehicleID === "" ? "Add" : "Edit"} vehicle</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>
    );
  }

}

export default connect(
  (state: ApplicationState) => state.announcements, // Selects which state properties are merged into the component's props

)(Vehicle as any); // eslint-disable-line @typescript-eslint/no-explicit-any
