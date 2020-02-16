import {Button, Modal} from "react-bootstrap";
import React from "react";

const GameAddedModal = props => {

    return (
        <Modal animation={true} show={props.addedGameModal}>
            <Modal.Header>
                <Modal.Title>Game added</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" href='http://localhost:3000/'>
                    Home
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default GameAddedModal;