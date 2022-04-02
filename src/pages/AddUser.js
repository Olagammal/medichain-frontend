import React from "react"
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap"
import NavbarComponent from "../Components/Navbar";

const AddUser = () => {

    const onSubmit = (e) => {
        e.preventDefault();
    }
    const onAddRecord = (e) => {
        e.preventDefault();
    }

    return (
        <React.Fragment><NavbarComponent />
            <Container>
                <Form>
                    <h3>Add user</h3><Button onClick={() => onAddRecord()}>Add record</Button>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <br />
                        <Input id="name" name="name" placeholder="enter your name" type="text" /><br />
                        <Label for="mobile">Mobile number</Label>
                        <br />
                        <Input id="mobile" name="mobile" placeholder="enter your mobile number" type="text" /><br />
                        <Label for="age">age</Label>
                        <br />
                        <Input id="age" name="age" placeholder="enter your age" type="text" /><br />
                        <Label for="publicAddress">public address</Label>
                        <br />
                        <Input id="publicAddress" name="publicAddress" placeholder="enter your public address" type="text" />
                    </FormGroup>
                    <Button onClick={(e) => { onSubmit(e) }}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </React.Fragment>)
}

export default AddUser