import React from "react"
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap"
import NavbarComponent from "../Components/Navbar";

const Login = () => {

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <React.Fragment><NavbarComponent />
            <Container>

                <Form>
                    <FormGroup>
                        <Label for="mobile">Mobile number</Label>
                        <br />
                        <Input id="mobile" name="mobile" placeholder="enter your mobile number" type="text" />
                    </FormGroup>
                    <Button onClick={(e) => { onSubmit(e) }}>
                        Submit
                    </Button>
                </Form>
            </Container></React.Fragment>)
}

export default Login