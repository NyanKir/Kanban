import React from "react";
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";

const Container = styled.div`
    border: 1px solid lightgray;
    margin-bottom: 9px;
    padding: 8px;
`;
export default class Task extends React.Component {
    render() {

        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {
                    (provided)=>(
                        <Container {...provided.draggableProps}
                                   {...provided.dragHandleProps} ref={provided.innerRef}>
                            {this.props.task.content}
                        </Container>
                    )
                }

            </Draggable>
        )
    }
}