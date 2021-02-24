import * as React from 'react';
import { connect } from 'react-redux';


type ModalProps = {
    param: any,
    handleModal(): void,
    handleChangeState(param: any, value: any): void,
    sendData(): void
}

interface AddGroup {
    showGroup: boolean,
    showStaff: boolean
}

const modalWrapper = {
    background: "#fff",
    width: "80%",
    maxWidth: "800px",
    margin: "4rem auto",
    overflow: "auto"
}

const modalHeader = {
    background: "#2c2c2c",
    color: "#c9c9c9",
    padding: "1rem",
    display: "flex",
}

const closeModalBtn = {
    fontSize: "1.5rem",
    cursor: "pointer",
    right: "25px"
}

const modalContent = {
    padding: "1.5rem 1rem 8rem"
}

const modalInput = {
    border: "none"
}

const btn = {
    cursor: "pointer",
}

const chooseOpt = {
    background: "#fff",
    color: "#000",
    paddingTop: "30px",
    right: "0px",
    top: "102%",
    minWidth: "240px",
    fontSize: "11px"
}
const addtitle = {
    fontSize: "15px"
}

class AnnouncementModal extends React.Component<ModalProps, AddGroup> {

    state: AddGroup = {
        showGroup: false,
        showStaff: false
    };

    sendAnnouncement = () => {
        this.setState({ showGroup: false, showStaff: false })
        this.props.sendData();
    }

    addGroup = () => {
        this.setState({showGroup: !this.state.showGroup, showStaff: false})
    }

    addStaff = () => {
        this.setState({showStaff: !this.state.showStaff, showGroup: false})
    }

    public render() {
        return (
            <div
                style={{
                    position: 'fixed',
                    left: '0',
                    top: '100px',
                    width: '100%',
                    transform: this.props.param.modalshow ? 'translateY(0vh)' : 'translateY(-100vh)',
                    transition: "all 1.3s ease",
                }}
                className="zindex-fixed"
            >
                <div style={modalWrapper}>
                    <div className="position-relative" style={modalHeader}>
                        <p>Announcement</p>
                        <span
                            className="text-right position-absolute"
                            style={closeModalBtn}
                            onClick={this.props.handleModal}
                        >
                            x
                        </span>
                    </div>
                    <div style={modalContent}>
                        <div className="container clearfix">
                            <div className="row gutter-40 col-mb-80">
                                <h3 style={{margin: "1.8rem auto", width:"100%", textAlign:"center"}}>New Announcement</h3>
                                <div className="postcontent col-lg-12">
                                    <table className="table table-responsive-sm">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Announcement</th>
                                                <th colSpan={2}>Send to</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        style={modalInput}
                                                        value={this.props.param.title}
                                                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                                            this.props.handleChangeState("title", e.currentTarget.value);
                                                        }}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        style={modalInput}
                                                        value={this.props.param.bodyText}
                                                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                                            this.props.handleChangeState("bodyText", e.currentTarget.value);
                                                        }}
                                                    />
                                                </td>
                                                <td className="position-relative">
                                                    <span style={btn} onClick={this.addGroup}>Add group</span>
                                                    {this.props.param.modalshow &&
                                                        this.state.showGroup &&
                                                        (<div style={chooseOpt} className="position-absolute">
                                                            <div className="mb-3">
                                                                <strong style={addtitle}>Add group(s)</strong>
                                                            </div>
                                                            <div className="border-top border-bottom overflow-auto p-3">
                                                                <span className="float-left">Management (4)</span>
                                                                <input type="checkbox" className="float-right mt-1" />
                                                            </div>
                                                            <div className="border-top border-bottom overflow-auto p-3">
                                                                <span className="float-left">Logistics (5)</span>
                                                                <input type="checkbox" className="float-right mt-1" />
                                                            </div>
                                                            <div className="border-top border-bottom overflow-auto p-3">
                                                                <span className="float-left">HR (2)</span>
                                                                <input type="checkbox" className="float-right mt-1" />
                                                            </div>
                                                            <div className="border-top border-bottom overflow-auto p-3">
                                                                <span className="float-left">Mt Lebanon WASH (14)</span>
                                                                <input type="checkbox" className="float-right mt-1" />
                                                            </div>
                                                            <div className="border-top border-bottom overflow-auto p-3">
                                                                <span className="float-left">Beirut shelter (38)</span>
                                                                <input type="checkbox" className="float-right mt-1" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="position-relative">
                                                    <span style={btn} onClick={this.addStaff}>Add staff</span>
                                                    {this.props.param.modalshow &&
                                                        this.state.showStaff &&
                                                        (<div style={chooseOpt} className="position-absolute">
                                                            <div className="mb-3">
                                                                <strong style={addtitle}>Add staff(s)</strong>
                                                            </div>
                                                            <div className="border-top border-bottom overflow-auto p-3">
                                                                <span className="float-left">Martin Krastrup (Management)</span>
                                                                <input type="checkbox" className="float-right mt-1" />
                                                            </div>
                                                            <div className="border-top border-bottom overflow-auto p-3">
                                                                <span className="float-left">Rasmus Jacobsen (Management)</span>
                                                                <input type="checkbox" className="float-right mt-1" />
                                                            </div>
                                                            <div className="border-top border-bottom overflow-auto p-3">
                                                                <span className="float-left">Anders Malver (HR)</span>
                                                                <input type="checkbox" className="float-right mt-1" />
                                                            </div>
                                                            <div className="border-top border-bottom overflow-auto p-3">
                                                                <span className="float-left">Hassan Hassouni (Mt Lebanon WASH)</span>
                                                                <input type="checkbox" className="float-right mt-1" />
                                                            </div>
                                                            <div className="border-top border-bottom overflow-auto p-3">
                                                                <span className="float-left">Tony al-Nimr (Beirut shelter)</span>
                                                                <input type="checkbox" className="float-right mt-1" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </td>
                                                <td style={btn} onClick={this.sendAnnouncement}>
                                                    Send
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect()(AnnouncementModal);
