import React, {Component} from 'react';
import './App.css';
import Field from "./components/Field/Field";
import Cell from "./components/Field/Cell/Cell";


const FIELD_SIZE = 6;


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: this.generateCells(),
            counter: 0,
        }
    }

    generateCells = () => {
        let cells = [];
        let cellsCount = FIELD_SIZE ** 2;
            for (let i = 0; i < cellsCount; i++) {
                cells.push({
                    open: false,
                    hasItem: false,
                })
            }
            let randomIndex = Math.floor(Math.random() * cellsCount);
            cells[randomIndex].hasItem = true;
            return cells;
    };

    openCell = (id) => {
        let cell = {...this.state.cells[id]};
        let state = {...this.state};
            if (!cell.open) {
                cell.open = true;
            let cells = [...this.state.cells];

            cells[id] = cell;
            state.cells = cells;
            state.counter = state.counter + 1;

            this.setState(state);
        }
    };

    render() {
        return (
            <div className="container">
                <Field>
                    {this.state.cells.map((item, index) =>
                        <Cell
                            cell={item}
                            key={index}
                            click={() => this.openCell(index)}
                        />
                    )}
                </Field>
            </div>
        );
    }
}

export default App;