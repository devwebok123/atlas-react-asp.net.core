import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as OrganizationMemberStore from '../store/OrganizationMember';

import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';



// At runtime, Redux will merge together...
type StaffProps =
  OrganizationMemberStore.OrganizationMemberState // ... state we've requested from the Redux store
    & typeof OrganizationMemberStore.actionCreators // ... plus action creators we've requested

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


interface IState {
    inputshow: boolean,
    staffID: string,
  displayTitle: string,
  email: string,
  title: string,
  phone: string,
  umbracoMemberId: string,
  groups: any,
  organization: any
}

class Staff extends React.Component<StaffProps, IState> {
  state: IState = {
    inputshow: false,
    staffID: "",
    displayTitle: "",
    email: "",
    title: "",
    phone: "",
    umbracoMemberId: "",
    groups: null,
    organization: null
  };

  // This method is called when the component is first added to the document
  public componentDidMount() {
    this.ensureDataFetched();
  }


  createStaff = () => {
    this.setState({
      inputshow: true,
      staffID: "",
      displayTitle: "",
      email: "",
      title: "",
      phone: "",
      umbracoMemberId: "",
      groups: null,
      organization: null
    });
  }


  editStaff = (id: string) => {
    var vm = this;
    const headers = { 'Content-Type': 'application/json' };
    fetch(`https://localhost:44348/api/staff/id?id=` + id, { headers })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            vm.setState({
                staffID: id,
                displayTitle: (data.displayTitle !== null)?data.displayTitle:"",
                email: (data.email !== null)?data.email:"",
                title: (data.title !== null)?data.title:"",
                phone: (data.phone !== null)?data.phone:"",
                umbracoMemberId: (data.umbracoMemberId !== null)?data.umbracoMemberId:"",
                groups: data.groups,
                organization: data.organization,
                inputshow: true
            })
        });
  }

  sendStaff = () => {
    let data: Object;
    if (this.state.staffID === "") {
        data = {
            "displayTitle": this.state.displayTitle,
            "email": this.state.email,
            "title": this.state.title,
            "phone": this.state.phone,
            "umbracoMemberId": "00000000-0000-0000-0000-000000000000",
            "groups": null,
            "organization": null
        }
    } else {
        data = {
            "id": this.state.staffID,
            "email": this.state.email,
            "title": this.state.title,
            "phone": this.state.phone,
            "umbracoMemberId": "00000000-0000-0000-0000-000000000000",
            "groups": null,
            "organization": null
        }
    }

    this.ensureDataSave(data);
    this.setState({ inputshow: !this.state.inputshow, staffID: "" });
}

  public render() {
    return (
      <React.Fragment>
        <NavMenu />
        {this.renderStaff()}
        <Footer />
      </React.Fragment>
    );
  }

  private ensureDataFetched() {
    this.props.requestStaffs();
  }
  private ensureDataSave(data: any) {
    this.props.saveStaff(data);
  }

  private renderStaff() {
    return (
      <section id="content">
        <div className="content-wrap" style={{padding: "170px 0", minHeight: "520px"}}>
            <div className="container">
                <div className="m-auto" style={{display: this.state.inputshow ? 'none' : ''}}>
                    <button
                        className="float-right font-weight-bold mb-3"
                        style={createbtn}
                        onClick={this.createStaff}
                    >Add Member</button>
                    <table className="table table-responsive-sm text-left">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Title</td>
                                <td>Group</td>
                                <td>Primary work site</td>
                                <td>Contacts</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.staffs.map((staff: OrganizationMemberStore.OrganizationMember) =>
                          <tr key={staff.id}>
                            <td>{staff.displayTitle}</td>
                            <td>{staff.title}</td>
                            <td>{staff.groups}</td>
                            <td></td>
                            <td>{staff.phone} <br/> {staff.email}</td>
                            <td>
                                <svg
                                    stroke="#1ABC9C"
                                    fill="#1ABC9C"
                                    stroke-width="0"
                                    viewBox="0 0 16 16"
                                    height="1.5em"
                                    width="1.5em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{cursor: "pointer"}}
                                    onClick={() => { this.editStaff(staff.id) }}
                                >
                                    <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"></path>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"></path>
                                </svg>
                            </td>
                        </tr>
                        )}
                      </tbody>
                    </table>
                </div>
                {this.state.inputshow && (
                    <div>
                        <div className="overflow-auto pb-1">
                            <div className="col-md-6 float-left">
                                <label style={ lab }>name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.displayTitle}
                                    placeholder="Name"
                                    onChange = {(e: React.FormEvent<HTMLInputElement>) => {this.setState({displayTitle: e.currentTarget.value})}}
                                />
                            </div>
                            <div className="col-md-6 float-left">
                                <label style={ lab }>title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.title}
                                    placeholder="Title"
                                    onChange = {(e: React.FormEvent<HTMLInputElement>) => {this.setState({title: e.currentTarget.value})}}
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label style={ lab }>email</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.email}
                                placeholder="Email"
                                onChange = {(e: React.FormEvent<HTMLInputElement>) => {this.setState({email: e.currentTarget.value})}}
                            />
                        </div>
                        <div className="col-md-12">
                            <label style={ lab }>phone</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.phone}
                                placeholder="Phone"
                                onChange = {(e: React.FormEvent<HTMLInputElement>) => {this.setState({phone: e.currentTarget.value})}}
                            />
                        </div>
                        <div className="col-md-12 mt-3">
                            <button
                                className="font-weight-bold"
                                style={editbtn}
                                onClick={() => this.sendStaff()}
                            >{this.state.staffID === "" ? "Add" : "Update"} Member</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </section>
    );
  }

}

export default connect(
  (state: ApplicationState) => state.staffs, // Selects which state properties are merged into the component's props
  OrganizationMemberStore.actionCreators
)(Staff as any); // eslint-disable-line @typescript-eslint/no-explicit-any
