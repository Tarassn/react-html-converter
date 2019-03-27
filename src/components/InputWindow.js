import React, { Component } from 'react';


class InputWindow extends Component {

    changeInput = (event) => {
        let currentInput = event.target.value;
        this.props.addMarkdown(currentInput);
    };
    render() {

        return (
            <div>
                <textarea
                    className='question__input question__textarea'
                    placeholder='Type your HTML'
                    defaultValue={''}
                    onChange={this.changeInput}>{}</textarea>
            </div>
        );
    }
}


export default InputWindow;