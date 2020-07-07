import React from "react";
import styled from "styled-components";
import Task from "./task";
import {Droppable} from "react-beautiful-dnd";

const Container = styled.div`
    font-family: Roboto,-apple-system,BlinkMacSystemFont,sans-serif;
    width: 300px;
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px
`;
const Tasks = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    transition: background-color .2s ease;
    background-color: ${props=>(props.isDraggingOver)? 'skyblue':'white'};
`;

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided,snapshot) =>
                        (
                            <Tasks ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                                {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
                                {provided.placeholder}
                            </Tasks>
                        )}
                </Droppable>

            </Container>
        )
    }
}