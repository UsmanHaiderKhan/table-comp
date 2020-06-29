import React, { Component } from 'react';
class Categories extends Component {
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item active">Entertainment</li>
                <li className="list-group-item">Fight</li>
                <li className="list-group-item">Story</li>
                <li className="list-group-item">Romentic</li>
            </ul>
        );
    }
}
export default Categories;