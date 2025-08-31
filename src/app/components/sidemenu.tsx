"use client"

import "../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const MessageButton = () => {
    const showModal = () => {
        console.log("aho");
    }    
    return (
        <Button className="my-button" variant="primary" onClick={()=>alert()}>Primary</Button>
        
    )
}

export const SideMenu = () => {

    return (
        <div className="w-96 bg-white shadow rounde">
            <MessageButton />
        </div>
    )