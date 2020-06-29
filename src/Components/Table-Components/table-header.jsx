import React, { Component } from 'react';
class TableHeader extends Component {
    render() {
        return (
            <thead className="bg-primary text-white">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Movies</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
        );
    }
}
export default TableHeader;