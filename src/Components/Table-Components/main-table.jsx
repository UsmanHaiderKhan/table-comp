import React, { Component } from 'react';
import TableHeader from "./table-header";
import TableBody from "./table-body";
class MainTable extends Component {
    render() {
        return (
            <table className="table table-hover">
                <TableHeader />
                <TableBody />
            </table>
        );

    }
}
export default MainTable;