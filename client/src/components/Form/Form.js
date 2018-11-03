import React from "react";
import { Row, Input, Button } from 'react-materialize'
import QuestionRow from "./QuestionRow";

const Form = props => {
    const questionArray = ["30 Second Pitch", "My Skills", "My Passions", "My Values", "Help Wanted"];
    return <div>
        <Row>
            <Input s={12} type='select' label="Industry" defaultValue='2'>
                <option value='1'>Music</option>
                <option value='2'>Art</option>
                <option value='3'>Entrepreneurship</option>
            </Input>
        </Row>
        {questionArray.map((question) =>
            <QuestionRow
                key={question + Math.random()}
                handleFormSubmit={(e, inputName) =>
                    this.handleFormSubmit(e, inputName)}
                quesitonText={question}
                inputName={question.split(' ').join('-')}
            />
        )
        }

    </div>
};

export default Form;
