import * as React from 'react';
import { connect } from 'react-redux';
// import { RouteComponentProps } from 'react-router';
// import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as AnnouncementsStore from '../store/Announcements';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import AnnouncementModal from '../components/AnnouncementModal';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


// At runtime, Redux will merge together...
type AnnouncementsProps =
  AnnouncementsStore.AnnouncementsState // ... state we've requested from the Redux store
  & typeof AnnouncementsStore.actionCreators // ... plus action creators we've requested
const createbtn = {
  fontSize: "13px",
  color: "#fff",
  background: "#000",
  border: "none",
  padding: "5px 15px",
}

const backDrop = {
  background: "rgba(63, 61, 61, 0.692)",
  height: "100%",
  transition: "all 1.3s",
  width: "100%"
}

const btn = {
  cursor: "pointer",
}


interface IState {
    modalshow: boolean,
    announcementID: string,
    title: string,
    bodyText: string
}

class Announcement extends React.Component<AnnouncementsProps, IState> {
  state: IState = {
    modalshow: false,
    announcementID: "",
    title: "",
    bodyText: ""
  };

  // This method is called when the component is first added to the document
  public componentDidMount() {
    this.ensureDataFetched();
  }


  handleModal = () => {
      this.setState({ modalshow: !this.state.modalshow, title: "", bodyText: "" });
  }

  sendAnnouncement = () => {
      if (this.state.title === "") {
          alert("Please insert title");
          return;
      }
      if (this.state.bodyText === "") {
          alert("Please insert annountment");
          return;
      }
      let data: Object;
      if (this.state.announcementID === "") {
          data = {
              "title": this.state.title,
              "bodyText": this.state.bodyText,
              "createdDateTime": "2021-02-02T17:21:48.958Z",
              "modifiedDateTime": "2021-02-02T17:21:48.958Z",
              "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "selectedGroups": [
                  {
                      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                      "title": "string",
                      "members": [
                          {
                              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                              "displayTitle": "string",
                              "umbracoMemberId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                              "groups": [null]
                          }
                      ]
                  }
              ],
              "selectedMembers": [
                  {
                      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                      "displayTitle": "string",
                      "umbracoMemberId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                      "groups": [null]
                  }
              ]
          }
      } else {
          data = {
              "id": this.state.announcementID,
              "title": this.state.title,
              "bodyText": this.state.bodyText,
              "createdDateTime": "2021-02-02T17:21:48.958Z",
              "modifiedDateTime": "2021-02-02T17:21:48.958Z",
              "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "selectedGroups": [
                  {
                      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                      "title": "string",
                      "members": [
                          {
                              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                              "displayTitle": "string",
                              "umbracoMemberId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                              "groups": [null]
                          }
                      ]
                  }
              ],
              "selectedMembers": [
                  {
                      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                      "displayTitle": "string",
                      "umbracoMemberId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                      "groups": [null]
                  }
              ]
          }
      }

      this.ensureDataSave(data);
      this.setState({ modalshow: !this.state.modalshow, announcementID: "" });
  }

  handleChangeState = (param: any, value: any) => {
      if (param === "title") {
          this.setState({ title: value })
      } else {
          this.setState({ bodyText: value });
      }
  }

    editAnnouncement = (id: string) => {
        var vm = this;
        const headers = { 'Content-Type': 'application/json' };
        fetch(`https://localhost:44348/api/announcements/` + id, { headers })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                vm.setState({
                    announcementID: id,
                    title: data.title,
                    bodyText: data.bodyText,
                    modalshow: true
                })
            });
    }

  removeAnnouncement = (id: string) => {
    confirmAlert({
      title: '',
      message: 'Are you sure to remove this announcement?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.removeData(id)
        },
        {
          label: 'No',
          onClick: () => console.log('quit')
        }
      ]
    });
  };

  public render() {
    return (
      <React.Fragment>
        <NavMenu />
        {this.renderAnnouncementsTable()}
        {/* {this.renderPagination()} */}
        <Footer />
      </React.Fragment>
    );
  }

  private ensureDataFetched() {

    //const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
    this.props.requestAnnouncements();
  }

  private ensureDataSave(data: any) {
    this.props.saveAnnouncements(data);
  }

  private removeData(id: string) {
    this.props.removeAnnouncement(id);
  }

  private renderAnnouncementsTable() {
    return (
      <section id="content">
        { this.state.modalshow ?
          <div className="position-fixed" style={backDrop}></div>
          : null
        }
        <div className="content-wrap" style={{padding: "210px 0"}}>
          <div className="container clearfix">
            <div className="row gutter-40 col-mb-80">
              <h3 style={{margin: "1.8rem auto", width:"100%", textAlign:"center"}}>Announcements</h3>
              <div className="col-lg-12 pb-5">
                <b>Past announcements</b>
                <button
                  className="float-right font-weight-bold"
                  style={createbtn}
                  onClick={this.handleModal}
                >New announcement</button>
              </div>
              <div className="postcontent col-lg-12">
                <table className="table table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Author</th>
                      <th>Title</th>
                      <th>Announcement</th>
                      <th colSpan={2}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.props.announcements.map((announcement: AnnouncementsStore.Announcement) =>
                        <tr key={announcement.id}>
                          <td>{announcement.createdDateTime}</td>
                          <td>{announcement.createdBy}</td>
                          <td>{announcement.title}</td>
                          <td>{announcement.bodyText}</td>
                          <td style={btn} onClick = {() => {this.editAnnouncement(announcement.id)}}>Edit</td>
                          <td style={btn} onClick = {() => { this.removeAnnouncement(announcement.id) }}>Delete</td>
                        </tr>
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <AnnouncementModal
            param={this.state}
            handleModal={this.handleModal}
            handleChangeState={this.handleChangeState}
            sendData={this.sendAnnouncement}
        />
      </section>
    );
  }

  // private renderPagination() {
  //   const prevStartDateIndex = (this.props.startDateIndex || 0) - 5;
  //   const nextStartDateIndex = (this.props.startDateIndex || 0) + 5;

  //   return (
  //     <div className="d-flex justify-content-between">
  //       <Link className='btn btn-outline-secondary btn-sm' to={`/fetch-data/${prevStartDateIndex}`}>Previous</Link>
  //       {this.props.isLoading && <span>Loading...</span>}
  //       <Link className='btn btn-outline-secondary btn-sm' to={`/fetch-data/${nextStartDateIndex}`}>Next</Link>
  //     </div>
  //   );
  // }
}

export default connect(
  (state: ApplicationState) => state.announcements, // Selects which state properties are merged into the component's props
  AnnouncementsStore.actionCreators // Selects which action creators are merged into the component's props
)(Announcement as any); // eslint-disable-line @typescript-eslint/no-explicit-any
