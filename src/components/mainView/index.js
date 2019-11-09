import React, { PureComponent } from "react";
import "./mainView.css";

// Components
import CatsView from "./catsView/index";
import GridView from "./gridView/index";

/*
  CatsView
  GridView
*/

class MainView extends PureComponent {
  state = {
    gridCell: 1, // variable to set counter for grid cell
    gridCats: {}, // variable for storing cat value for grid cells
    isNewRow: true, // variable to set new row
    isDuplicateCatFound: false // variable to set duplicate cat found in a row in grid
  };

  // Displaying final result
  componentDidUpdate = (prevProps, prevState) => {
    const { gridCats, isDuplicateCatFound } = this.state;

    if (prevState.gridCats.grid12 !== gridCats.grid12) {
      setTimeout(() => {
        if (isDuplicateCatFound) {
          alert("YOU LOSE");
        } else {
          alert("YOU WIN");
        }
      }, 500);
    }
  };

  // Function to set new row flag
  setIsNewRowFlag = gridCell => {
    /*
      Checking if grid cell value is 3/6/9/12, then value%3 will be 0
      and row is complete and new row will start.
    */
    if (gridCell % 3 === 0) {
      this.setState({
        isNewRow: true
      });
    }
  };

  // Function to set duplicate cat found flag
  setIsDuplicateCatFoundFlag = (newGridCats, gridCellId) => {
    const { gridCats, gridCell, isNewRow } = this.state;
    const prevGridCellId = "grid" + (gridCell - 1); // variable to set previous grid cell value id

    /*
      Checking if flag for new row is true, then previous and current
      value of cat value in grid cell is not compared.
    */
    if (!isNewRow && gridCats[prevGridCellId] === newGridCats[gridCellId]) {
      this.setState({
        isDuplicateCatFound: true
      });
    }
  };

  // Function to add cat to grid cells
  addCatToGrid = catValue => {
    const { gridCats, gridCell } = this.state;
    const gridCellId = "grid" + gridCell; // variable to set current grid cell value id
    let newGridCats = { ...gridCats }; // variable to copy cat value for grid cells from state

    // Setting cat value in current grid cell value id to newGridCats
    newGridCats[gridCellId] = catValue;

    this.setIsDuplicateCatFoundFlag(newGridCats, gridCellId);

    this.setState({
      gridCats: newGridCats, // setting new grid cats in grid cats in state
      gridCell: gridCell + 1, // increase counter for grid cell
      isNewRow: false
    });

    this.setIsNewRowFlag(gridCell);
  };

  render() {
    const { gridCats } = this.state;

    return (
      <div className="main-view">
        <CatsView addCatToGrid={this.addCatToGrid} />
        <GridView gridCats={gridCats} />
      </div>
    );
  }
}

export default MainView;
