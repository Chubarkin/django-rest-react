import React, { Component } from 'react';


export default class Table extends React.Component {
    render() {
        const headFieldNames = this.props.headFieldNames;
        const items = this.props.items;
        const idField = this.props.idField;
        return (
            <table className="table">
                <thead>
                    <tr>
                        {Object.keys(headFieldNames).map(key => (
                            <th key={key}>{headFieldNames[key]}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item[idField]}>
                            {Object.keys(headFieldNames).map(key => (
                                <td key={key}>{item[key]}</td>
                            ))}
                        </tr>))}
                </tbody>
            </table>
        );
    }
}
