import React from "react";
import Card from "react-bootstrap/Card"

class Profile extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "100px" }}>
                <Card style={{ width: "80%" }}>
                    <Card.Header className="text-center" >Personal Information</Card.Header>
                    <Card.Body>
                        <form className="row g-3">
                            <div className="col-md-3">
                                <label htmlFor="validationDefault01" className="form-label">First name</label>
                                <input type="text" className="form-control" id="validationDefault01" value="Mark" required />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="validationDefault02" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="validationDefault02" value="Otto" required />
                            </div>
                        </form>
                        <form className="row g-3">
                            <div className="col-md-3">
                                <label htmlFor="validationDefault01" className="form-label">E-mail</label>
                                <input type="text" className="form-control" id="validationDefault01" value="Mark" required />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="validationDefault02" className="form-label">Password</label>
                                <input type="text" className="form-control" id="validationDefault02" value="Otto" required />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Profile;
