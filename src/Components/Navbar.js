import { useEffect, useState } from "react"
import { Form, FormGroup, Label, Input, Container, Button, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, Nav, DropdownMenu, NavbarText, DropdownToggle, DropdownItem } from "reactstrap"

const NavbarComponent = () => {
    const [role, setRole] = useState(null)
    let currentRole = localStorage.getItem("role").toString()
    useEffect(() => {
        if (currentRole === '0') {
            setRole('admin')
        } else if (currentRole === '1') {
            setRole('doctor')
        } else if (currentRole === '2') { setRole('patient') }
    }, [currentRole])
    return (<div>
        <Navbar
            color="light"
            expand="md"
            light
        >
            <NavbarBrand href="/">
                Medichain
            </NavbarBrand>
            <Collapse navbar>
                {role && <NavbarText >
                    {role}
                </NavbarText>}
            </Collapse>
        </Navbar>
    </div>)
}

export default NavbarComponent