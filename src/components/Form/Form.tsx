import React, { useState } from 'react';
import { FormBlock, FormControl, FormField, FormLabel, FormWrapper } from './Form.styled';
import plusIcon from '../../assets/images/plus.png';


export const Form = (props: { createNewTodo: Function }) => {
    const [taskText, setTaskText] = useState<string>('');

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (taskText) {
            props.createNewTodo(taskText);
            setTaskText('');
        }
    };

    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField value={taskText} type="text" onChange={(event) => setTaskText((event.target.value))} />
                    <FormControl icon={plusIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    );
};