import React from 'react';
import classnames from 'classnames';

const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}) => {

    return (
        <div className="form-group">
            <label htmlFor={ name }>{ label }</label>
            <input
                type={ type }
                name={ name }
                value={ value }
                className={ classnames("form-control form-control-lg",{"is-invalid": error })}
                placeholder={ placeholder }
                onChange={ onChange } />
            {error &&  <div className="invalid-feedback">{ error}</div>}
        </div>
    )
}

TextInputGroup.defaultProps = {
    type: "text"
}

export default TextInputGroup;