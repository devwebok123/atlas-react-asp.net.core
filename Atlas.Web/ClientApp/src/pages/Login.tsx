import * as React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const logo =  require("../assets/images/atlas_white.svg");
const bgimg =  require("../assets/images/background.png");
const bgstyle = {
    background: `url(${bgimg})`,
    backgroundSize: "cover"
}
const titlestyle = {
	color: "#e6e5dc",
	marginTop: "55px",
	marginBottom: "65px"
}
const loginbtnstyle = {
	background: "#8c86ff",
	color: "#d5ecff",
	fontSize: "15px",
	width: "100%",
	border: "none",
	borderRadius: "4px",
	height: "42px",
	marginTop: "25px",
	marginBottom: "25px"
}
const contactstyle = {
	paddingLeft: "7px",
	fontSize: "13px",
	color: "#acd5fc"
}
const pstyle = {
	fontSize: "13px",
	color: "#e6e5dc"
}
const useStyles = makeStyles({
	root: {
	    width: "100%"
	},
	input: {
		fontSize: "12px",
		border: "1px solid #5a5d63",
		color: "#e6e5dc"
	}
  });

const Login = () => (
  <div>
    <section id="content">
        <div className="content-wrap py-0">

            <div className="section p-0 m-0 h-100 position-absolute" style={bgstyle}></div>

            <div className="section bg-transparent min-vh-100 p-0 m-0">
					<div className="vertical-middle">
						<div className="container-fluid py-5 mx-auto">

							<div className="card mx-auto rounded-0 border-0" style={{maxWidth: "450px", background: "#292c34"}}>
								<div className="card-body" style={{padding: "40px"}}>
									<div className="center">
										<a href="/">
											<img src={logo} alt="Canvas Logo" width="40%" />
										</a>
									</div>
									<form noValidate autoComplete="off" className="mb-0 mt-5">
										<h3 className="text-center" style={titlestyle}>Platform login</h3>
										<div className="row">
											<TextField
											  id="username"
											  label="Email Address"
											  variant="outlined"
											  className={useStyles().root}
											  InputProps={{className: useStyles().input}}
											/>
											<TextField
											  id="password"
											  label="Password"
											  variant="outlined"
											  type="password"
											  className={`mt-4 ${useStyles().root}`}
											  InputProps={{className: useStyles().input}}
											/>
											<button className="font-weight-bold" style={loginbtnstyle}>LOG IN</button>
										</div>
									</form>
									<div>
										<svg stroke="currentColor" fill="#3989df" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd"></path>
											<path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z"></path>
										</svg>
										<span style={contactstyle}>
											Use <b>carl@boennebaek.com</b> and password <b>Password123</b>
										</span>
									</div>
									<div className="line line-sm" style={{borderColor: "#5a5d63"}}></div>
									<div>
										<p style={pstyle}>
											To learn more about our platform please reach out to <br/>
											contact@atlasassistance.org <br/>
											Forgot your password?
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

        </div>
    </section>
  </div>
);

export default connect()(Login);
