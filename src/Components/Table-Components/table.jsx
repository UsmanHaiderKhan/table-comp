import React, { Component } from 'react';
import Categories from "../Categories/categories";
import MainTable from "./main-table";
import "bootstrap/dist/css/bootstrap.min.css";
class Table extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="heading-2 text-center p-3">Table Components</h2>
                <div className="row">
                    <div className="col-md-4">
                        <Categories />
                    </div>
                    <div className="col-md-8">
                        <MainTable />
                    </div>
                </div>
            </div>

        );
    }
}
export default Table;