import * as React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Geocode from "react-geocode";

import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as RouterStore from '../store/Router';


import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';

import GoogleMapReact from 'google-map-react';
import location from '../assets/images/location.png'

// At runtime, Redux will merge together...
type RouterProps =
  RouterStore.RouterState // ... state we've requested from the Redux store
    & typeof RouterStore.actionCreators

const accordiondiv = {
  marginBottom: "-50px",
}
const createbtn = {
  fontSize: "13px",
  color: "#fff",
  background: "#000",
  border: "none",
  padding: "5px 15px",
}
const lab = {
  fontSize: "11px",
  height: "15px",
  margin: "15px 0",
}
const threedot = {
  top: "17px",
  right: "25px",
  cursor: "pointer"
}

const editmenu = {
  top: "25px",
  right: "7px",
  display: "none",
}

const editul = {
  listStyle: "none",
  padding: "15px",
}

const searchlocation = {
  width: "100%",
  overflow: "auto",
  padding: "10px",
  border: "1px solid #000",
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
  routerID: string,
  document: string,
  locationArr: any,
  locationPositionArr: any,
  center: any,
  searchlat: any,
  searchlng: any,
  address: any,
}

class Router extends React.Component<RouterProps, IState> {
  state: IState = {
    inputshow: false,
    routerID: "",
    document: "",
    locationArr: [
      "Hamra HQ",
      "South on General De Gaulle",
      "East on Saeb Salam/Corniche al-Mazraa to Adlieh",
      "North on Alfred Naccash to Sassine",
      "East on Independence",
      "North on Ghophrael Street"
    ],
    locationPositionArr: [],
    center: {},
    searchlat: "",
    searchlng: "",
    address: ""
  };

  // This method is called when the component is first added to the document
  public componentDidMount() {
    this.ensureDataFetched();
    const vm = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        vm.setState({center: pos, searchlat: pos.lat, searchlng: pos.lng});
      })
    }
  }


  createRouter = () => {
    this.setState({
      inputshow: true,
      routerID: "",
      document: "",
    });
  }

  updateRouter = () => {
    this.setState({
      inputshow: false,
    });
  }

  uploadfile = (e: any) => {
    this.setState({ document: e.target.files[0].name })

    var bytes: any;
    var fileList = e.target.files;
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
            const reqData = {
                "fileName": fileList[0].name,
                "fileContent": base64String,
                "vreatedDateTime": new Date(),
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
        {this.renderRouter()}
        <Footer />
      </React.Fragment>
    );
  }

  private ensureDataFetched() {
    this.props.requestRouters();
  }
  private ensureDataSave(data: any) {
    this.props.saveRouter(data);
  }

  openAccordion = (event) => {
    event.target.classList.toggle("accordion-active");
    // var panel = event.target.nextElementSibling;
    var panel = event.target.closest('div').querySelector('.accordion-panel');
    if (panel !== null) {
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.marginBottom = "20px";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.marginBottom = "50px";
      }
    }
    //locations
    var locArr = this.state.locationArr;
    var locPocArr = [];
    var vm = this;
    locArr.map((loc, index) => (
      Geocode.fromAddress(loc).then(
        (response) => {
          // console.log(index, response.results[0].geometry.location)
          // const { lat, lng } = response.results[0].geometry.location;
          locPocArr.push({
            index: index,
            location: response.results[0].geometry.location
          })
          vm.setState({locationPositionArr: locPocArr}, () => {
            console.log(this.state.locationPositionArr);
          });
        },
        (error) => {
          console.error("error", index);
        }
      )
    ))
  }
  openEditmenu = (event) => {
    var menu = event.target.closest('div').querySelector('.editmenu');
    if (menu !== null) {
      if (menu.style.display === "none") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    }
  }
  handleChange = address => {
    this.setState({ address: address });
  };

  handleSelect = address => {
    var vm = this;
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);
        vm.setState({ address: address, searchlat: latLng.lat, searchlng: latLng.lng });
      })
      .catch(error => console.error('Error', error));
  };
  private renderRouter() {
    Geocode.setApiKey("AIzaSyANFcGIwbJD5LnQfVNBlocD_T4vTs_fmpo");
    const AnyReactComponent = ({text}: any) =>
      <div className="position-relative">
        <img src={location} width={30} alt="mark" />
        <span
          className="position-absolute font-weight-bold"
          style={{left: "11px", top: "5px", fontSize: "15px"}}
        >
          {text}
        </span>
      </div>;
    return (
      <section id="content">
        <div className="content-wrap" style={{ padding: "170px 0", minHeight: "520px" }}>
          <div className="container">
            <div className="m-auto" style={{ display: this.state.inputshow ? 'none' : '' }}>
              <div className="col-md-6 float-left">
                <div className="overflow-auto">
                <button
                  id="addbtn"
                  className="float-right font-weight-bold mb-3"
                  style={createbtn}
                  onClick={this.createRouter}
                >
                  Add route
                </button>
                </div>
                <div style={accordiondiv} className="position-relative">
                  <div style={threedot} className="position-absolute">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                      onClick = {(e) => this.openEditmenu(e)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                        clipRule="evenodd">
                      </path>
                    </svg>
                    <div
                      className="position-absolute editmenu"
                      style={editmenu}
                    >
                      <ul
                        className="shadow p-3 mb-5 bg-white rounded"
                        style={editul}>
                        <li
                          style={{cursor: "pointer"}}
                        >
                          Edit
                        </li>
                        <li
                          style={{cursor: "pointer"}}
                        >
                          Remove
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    className="accordion"
                    onClick={(e) => this.openAccordion(e)}
                    style={{background: "none"}}
                  >
                    1. Hamra - Ashrafieh primary
                  </button>
                  <div className="accordion-panel" style={{marginBottom: "20px"}}>
                    <table
                      className="table table-responsive-sm text-left border"
                    >
                      <tbody>
                        <tr>
                          <td>Between:</td>
                          <td className="text-center">Hamara HQ</td>
                          <td className="text-center">Ashrafieh office</td>
                        </tr>
                        <tr>
                          <td rowSpan={this.state.locationArr.length + 1}>Route points</td>
                          <td colSpan={2} style={{border: "none"}}></td>
                        </tr>
                        {this.state.locationArr.length > 0 && this.state.locationArr.map((location, index) => (
                          <tr key={index}>
                            <td colSpan={2} style={{border: "none"}}>{index + 1}. {location} </td>
                          </tr>
                        ))}
                        <tr>
                          <td>Vehicles affiliated with route:</td>
                          <td colSpan={2}>1.Cash car 1</td>
                        </tr>
                        <tr>
                          <td>Comments/reminders:</td>
                          <td colSpan={2}></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-6 float-left">
                <div style={{ height: 'calc(100vh - 200px)', width: '100%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyANFcGIwbJD5LnQfVNBlocD_T4vTs_fmpo' }}
                    center={this.state.center}
                    defaultZoom={11}
                  >
                    {this.state.locationPositionArr.length > 0 && this.state.locationPositionArr.map((position, index) => (
                      <AnyReactComponent
                        key={index}
                        lat={position.location.lat}
                        lng={position.location.lng}
                        text={position.index + 1}
                      />
                    ))}
                  </GoogleMapReact>
                </div>
              </div>
            </div>
            <div style={{ display: this.state.inputshow ? '' : 'none' }}>
              <h3 style={{margin: "1.8rem auto", width:"100%", textAlign:"center"}}>
                  {this.state.routerID === "" ? "Add" : "Edit"} route
              </h3>
              <div className="col-md-12">
                <div className="col-md-4 float-left">
                  <label style={ lab }>Route name</label>
                  <input
                    type="text"
                    className="form-control position-relative"
                    style={{ zIndex: 99 }}
                  />
                </div>
                <div className="col-md-8 float-left mb-4">
                  <div className="position-relative" style={{ zIndex: 100 }}>
                    <label style={ lab }>Between</label><br />
                    <label style={ lab } className="mr-2">From:</label>
                    <select className="selectpicker" data-live-search="true">
                        <option>option1</option>
                        <option>option2</option>
                        <option>option3</option>
                    </select>
                    <label style={ lab } className="ml-2 mr-2">To:</label>
                    <select className="selectpicker" data-live-search="true">
                        <option>option1</option>
                        <option>option2</option>
                        <option>option3</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4 float-left">
                  <label style={ lab }>Route points</label>
                  <table className="table border position-relative" style={{ zIndex: 99 }}>
                    <thead>
                      <tr>
                        <th>Point</th>
                        <th>Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-left">
                        <td>1.</td>
                        <td>
                          <input
                            type="text"
                            style={{border: "none", width: "100%"}}
                          />
                        </td>
                      </tr>
                      <tr className="text-left">
                        <td>2.</td>
                        <td>
                          <input
                            type="text"
                            style={{border: "none", width: "100%"}}
                          />
                        </td>
                      </tr>
                      <tr className="text-left">
                        <td>3.</td>
                        <td>
                          <input
                            type="text"
                            style={{border: "none", width: "100%"}}
                          />
                        </td>
                      </tr>
                      <tr className="text-left">
                        <td>4.</td>
                        <td>
                          <input
                            type="text"
                            style={{border: "none", width: "100%"}}
                          />
                        </td>
                      </tr>
                      <tr className="text-left">
                        <td>5.</td>
                        <td>
                          <input
                            type="text"
                            style={{border: "none", width: "100%"}}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-8 float-left">
                  <label style={ lab }>Route point locations on map</label>
                  <div style={searchlocation}>
                    <div className="col-md-6 float-left pt-3">
                      <div className="position-relative" style={{ zIndex: 99 }}>
                        <PlacesAutocomplete
                          value={this.state.address}
                          onChange={this.handleChange}
                          onSelect={this.handleSelect}
                        >
                          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                              <input
                                {...getInputProps({
                                  placeholder: 'Search Places ...',
                                  className: 'location-search-input form-control',
                                })}
                              />
                              <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map((suggestion, index) => {
                                  const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                  // inline style for demonstration purpose
                                  const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                  return (
                                    <div
                                      {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                      })}
                                      key={index}
                                    >
                                      <span>{suggestion.description}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </PlacesAutocomplete>
                        <input
                          type="number"
                          className="form-control mt-3"
                          placeholder="lat"
                          value={this.state.searchlat}
                          onChange = {(e) => {
                            this.setState({searchlat: e.currentTarget.value})
                          }}
                        />
                        <input
                          type="number"
                          className="form-control mt-3"
                          placeholder="long"
                          value={this.state.searchlng}
                          onChange = {(e) => {
                            this.setState({searchlng: e.currentTarget.value})
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 float-left pt-3">
                      <div className="position-relative" style={{ height: '250px', width: '100%', zIndex: 99 }}>
                        <GoogleMapReact
                          bootstrapURLKeys={{ key: 'AIzaSyANFcGIwbJD5LnQfVNBlocD_T4vTs_fmpo' }}
                          center={(this.state.searchlat !== "" && this.state.searchlng !== "") ? {lat: parseFloat(this.state.searchlat), lng: parseFloat(this.state.searchlng)} : null}
                          defaultZoom={8}
                        >
                          <AnyReactComponent
                            lat={this.state.searchlat}
                            lng={this.state.searchlng}
                            text=""
                          />
                        </GoogleMapReact>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 p-0">
                  <div className="col-md-4">
                    <label style={ lab }>Vehicles</label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-4 float-left">
                  <label style={ lab }>Comments / reminder</label>
                  <textarea className="form-control"></textarea>
                </div>
                <div className="col-md-8 float-left">
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
                <div className="col-md-12">
                  <button
                    id="editbtn"
                    className="font-weight-bold float-right"
                    style={createbtn}
                    onClick={() => this.updateRouter()}
                  >{this.state.routerID === "" ? "Add" : "Edit"} route</button>
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
  (state: ApplicationState) => state.routers, // Selects which state properties are merged into the component's props
  RouterStore.actionCreators
)(Router as any); // eslint-disable-line @typescript-eslint/no-explicit-any
