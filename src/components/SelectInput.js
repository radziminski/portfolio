import React, { Component } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

class SelectInput extends Component {
    state = {
        showDropdown: false,
        header: this.props.title || this.props.list[0],
        selectedOption: null,
    };

    toggleDropdown = () => {
        this.setState({ showDropdown: !this.state.showDropdown });
    };

    selectOption = (e) => {
        this.setState({ selectedOption: e.target.id, header: e.target.innerText });
        this.props.filter(e);
    };

    render() {
        let optionsList = null;
        if (this.state.showDropdown) {
            optionsList = (
                <ul className="select-input__drop-down">
                    {this.props.list.map((el, id) => (
                        <li key={id} className="select-input__element" id={el.id} onClick={this.selectOption}>
                            {el.name}
                        </li>
                    ))}
                </ul>
            );
        }
        return (
            <div className="select-input" onClick={this.toggleDropdown}>
                <div className="select-input__header">
                    {this.state.header}{' '}
                    {this.state.showDropdown ? (
                        <RiArrowDropUpLine className="select-input__icon" />
                    ) : (
                        <RiArrowDropDownLine className="select-input__icon" />
                    )}
                </div>
                {optionsList}
            </div>
        );
    }
}

export default SelectInput;
