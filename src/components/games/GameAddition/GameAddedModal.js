import {Button, Modal} from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";

/**
 * This component shows a modal with a successful message after a game has been added successfully
 * through the Add Game page.
 */
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

GameAddedModal.propTypes = {
    /**
     * A boolean whether to show or not the modal.
     */
    addedGameModal: PropTypes.bool.isRequired
};