import React from 'react';
import { ILines } from "../Table";

interface IClickedLines {
    line: ILines;
    onClick?: () => void;
}

const LineItem = ({ line, onClick }: IClickedLines) => {
    return (
            <tr
                style={{cursor: 'pointer'}}
                onClick={onClick}
                key={line.id}
            >
                <td>{line.name}</td>
                <td>${line.salary}</td>
                <td>{line.bonus}</td>
                <td>{line.supervisor}</td>
            </tr>
    );
};

export default LineItem;
