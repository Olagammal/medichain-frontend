import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Input, Label } from "reactstrap"

const Popup = () => {
    <Modal
        toggle={function noRefCheck() { }}
    >
        <ModalHeader toggle={function noRefCheck() { }}>
            Modal title
        </ModalHeader>
        <ModalBody>

            <Form>
                <FormGroup >
                    <Input
                        id="fileUpload"
                        name="fileUpload"
                        // placeholder="fileUpload"
                        type="fileUpload"
                    />
                    <Label for="fileUpload">
                        Email
                    </Label>
                </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
            <Button
                color="primary"
                onClick={function noRefCheck() { }}
            >
                Upload
            </Button>
            {' '}
            <Button onClick={function noRefCheck() { }}>
                Cancel
            </Button>
        </ModalFooter>
    </Modal>
}

export default Popup