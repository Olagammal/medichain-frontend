import React from "react"
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap"
import NavbarComponent from "../Components/Navbar";

const ViewDetails = () => {

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <NavbarComponent />
            <Container>

                {/* <Form>
                    <FormGroup>
                        <Label for="mobile">Mobile number</Label>
                        <br />
                        <Input id="mobile" name="mobile" placeholder="enter your mobile number" type="text" />
                    </FormGroup>
                    <Button onClick={(e) => { onSubmit(e) }}>
                        Submit
                    </Button>
                </Form> */}
                <h2>Details</h2><br />{localStorage.getItem("role") === '1' && localStorage.getItem("role") === '0' && <Button>Add record</Button>}

                <h3>Name:</h3><br />
                <p></p>
                <h3>Phone:</h3><br />
                <p></p>
                <h3>Records:</h3><br />
                <p></p>
            </Container></React.Fragment>)
}

export default ViewDetails