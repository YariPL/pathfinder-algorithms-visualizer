import React, {Component} from 'react';
import { AppContext } from './App';
import { dijkstra } from '../algorithms/dijkstra-alg';

export default class ControlPanel extends Component {
    render() {
        return (
          <AppContext.Consumer>
            {context => (
              <div className="controlPanel">
				  <div className='cTop'>
					
					<div className='resetButton'
					onClick={
					context.resetGrid
					}
					>
					Reset
					</div>
				<div className="selectAlgorithm">
					{/* <select>
						<option onClick={() => this.selectAlgorithm(dijkstra)}>
						dijkstra
						</option>
					</select> */}
					</div>	
					<div className="selectTool">
					<select id='selectTool' onChange={context.selectTool} defaultValue='Target'>
						<option>
						Start
						</option>
						<option >
						Target
						</option>
						<option>
						Wall
						</option>
						<option>
						Clear Wall
						</option>
					</select>	
					</div>
					<div
						className="startButton"
						onClick={

							((context.startNode.row || context.startNode.row === 0) && (context.targetNode.column || context.targetNode.column === 0))
								? context.startAlgorithm
								: console.log("first set nodes")
						}
					>
						{((context.startNode.row || context.startNode.row === 0) && (context.targetNode.column || context.targetNode.column === 0))
							? "Start"
							: "First set start/target nodes"}
					</div>
						</div>
					<div className='cBottom'>

					</div>
              </div>
            )}
          </AppContext.Consumer>
        );
    }
}