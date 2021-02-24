import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as OrganizationGroupStore from '../store/OrganizationGroup';

import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';



// At runtime, Redux will merge together...
type GroupProps =
OrganizationGroupStore.OrganizationGroupState // ... state we've requested from the Redux store
  & typeof OrganizationGroupStore.actionCreators // ... plus action creators we've requested

export interface OrganizationMember {
  id: string;
  displayTitle: string;
  email: string;
  title: string;
  phone: string;
  umbracoMemberId: string;
  groups: any;
  organization: any;
}

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
    groupID: string,
    title: string,
    members: any,
    staffs: any
}

class Group extends React.Component<GroupProps, IState> {

  state: IState = {
    inputshow: false,
    groupID: "",
    title: "",
    members: [],
    staffs: []
  };

  // This method is called when the component is first added to the document
  public componentDidMount() {
    this.ensureDataFetched();
    fetch(`https://localhost:44348/api/staff`)
        .then((response) => response.json() as Promise<OrganizationMember[]>)
        .then((data) => {
            this.setState({staffs: data})
        });
  }


  createGroup = () => {
    this.setState({
        inputshow: true,
        groupID: "",
        title: "",
        members: []
     });
}


  editGroup = (id: string) => {
      var vm = this;
      const headers = { 'Content-Type': 'application/json' };
      fetch(`https://localhost:44348/api/groups/id?id=` + id, { headers })
          .then(response => response.json())
          .then(data => {
              console.log(data);
              vm.setState({
                  groupID: id,
                  title: (data.title !== null)?data.title:"",
                  members: data.members,
                  inputshow: true
              })
          });
  }
  pushMembers = () => {
    let value = document.getElementById("multipleselect").closest("div").querySelector('.filter-option-inner-inner').innerHTML;
    console.log(value);
    this.setState({members: value.split(',')});
  }
  sendGroup = () => {
      let data: Object;
      if (this.state.groupID === "") {
          data = {
              "title": this.state.title,
              "members": this.state.members
          }
      } else {
          data = {
              "id": this.state.groupID,
              "title": this.state.title,
              "members": this.state.members
          }
      }
      console.log(data);
      //this.ensureDataSave(data);
      //this.setState({ inputshow: !this.state.inputshow, groupID: "" });
  }

  public render() {
    return (
      <React.Fragment>
        <NavMenu />
        {this.renderGroup()}
        <Footer />
      </React.Fragment>
    );
  }

  private ensureDataFetched() {
    this.props.requestGroups();
  }
  private ensureDataSave(data: any) {
    this.props.saveGroup(data);
  }

  private renderGroup() {
    return (
      <section id="content">
        <div className="content-wrap" style={{padding: "170px 0", minHeight: "520px"}}>
            <div className="container">
                <div className="m-auto" style={{display: this.state.inputshow ? 'none' : ''}}>
                    <button
                        className="float-right font-weight-bold mb-3"
                        style={createbtn}
                        onClick={this.createGroup}
                    >Add Group</button>
                    <table className="table table-responsive-sm text-left">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Members</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                          {this.props.groups.map((group: OrganizationGroupStore.OrganizationGroup) =>
                            <tr key={group.id}>
                              <td>{group.title}</td>
                              <td>1</td>
                              <td>
                                  <svg
                                      stroke="#1ABC9C"
                                      fill="#1ABC9C"
                                      strokeWidth="0"
                                      viewBox="0 0 16 16"
                                      height="1.5em"
                                      width="1.5em"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{ cursor: "pointer" }}
                                      onClick={() => { this.editGroup(group.id) }}
                                  >
                                    <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"></path>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd"></path>
                                  </svg>
                              </td>
                            </tr>
                          )}
                        </tbody>
                    </table>
                </div>
                <div style={{display: this.state.inputshow ? '' : 'none'}}>
                    <label style={ lab }>name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.title}
                        placeholder="Name"
                        onChange = {(e: React.FormEvent<HTMLInputElement>) => {this.setState({title: e.currentTarget.value})}}
                    />
                    <div>
                      <label style={ lab }>Members</label>
                      <select
                        id="multipleselect"
                        className="selectpicker form-control"
                        multiple
                        data-live-search="true"
                        onChange = {(e: React.FormEvent<HTMLSelectElement>) => {this.pushMembers()}}
                      >
                        {this.state.staffs.length > 0 && this.state.staffs.map((staff: OrganizationMember) =>
                          <option key={staff.id} value={staff.id}>{staff.displayTitle}</option>
                        )}
                      </select>
                    </div>
                    <div className="mt-3">
                        <button
                            className="font-weight-bold"
                                style={editbtn}
                                onClick={() => this.sendGroup()}
                        >{this.state.groupID === "" ? "Add" : "Update"} Group</button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }

}

export default connect(
  (state: ApplicationState) => state.groups, // Selects which state properties are merged into the component's props
  OrganizationGroupStore.actionCreators
)(Group as any); // eslint-disable-line @typescript-eslint/no-explicit-any
