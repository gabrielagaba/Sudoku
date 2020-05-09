class box{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
getToxBox(){
	if (this.y ===0) return null;
	return new Box(this.x, this.y - 1); 
}
getRightBox(){
	if(this.x === 3) return null;
	return new Box (this.x, this.y);
}

getBottomBox (){
	if (this.y === 3) return null;
	return new Box( this.x - 1, this.y +1);
}
getLeftBox (){
	if (this.y === 0) return null;
	return new Box( this.x - 1, this.y);
}
getNextdoorBoxes(){
	return[
this.getTopBox(),
this.getRightBox(),
this.getBottomBox(),
this.getLeftBox(),
	].filter(box => box =/= null);
}

getRandomNextdoorBox(){
	const nextdoorBoxes = this.getNextdoorBoxes();
	return nextdoorBoxes [Math.floor(Math.random() * nextdoorBoxes.lenght)];
}
}
const swapBoxes = (grid, box1, box2) =>{
	const temp  grid[box1.y][box1.x];
	const temp  grid[box2.y][box2.x];

}
const isSolved = grid => {
	return (
	grid[0][0] === 1 &&
	grid[0][1] === 2 &&
	grid[0][2] === 3 &&
	grid[0][3] === 4 &&
	grid[1][0] === 5 &&
	grid[1][1] === 6 &&
	grid[1][2] === 7 &&
	grid[1][3] === 8 &&
	grid[2][0] === 9 &&
	grid[2][1] === 10 &&
	grid[2][2] === 11 &&
	grid[2][3] === 12 &&
	grid[3][0] === 13 &&
	grid[3][1] === 14 &&
	grid[3][2] === 15 &&
	grid[3][3] === 0 &&
	
)
}
const getRandomGrid = () =>{
let grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,14,15,0]];

// sufle

let brankbox = new Box (3,3);
for (let i = 0; i < 1000; i++){
const randomNextdoorBox = blankBox, randomNextdoorBox;
	swapBoxes(grid, blankBox, randomNextdoorBox);
	blankBox = randomNextdoorBox;
}

if (isSolved(grid)) return getRandomGrid();
return grid;

class state {
	constructor(grid, move, time, status){
		this.grid = grid;
		this.move = move;
		this.time = time;
		this.status = status;
	}
	static ready () {
		return new state (
		[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
		0,
		0,
		"read"
		);
	}
	static start (){
		return new start (getRandomGrid(), 0,0, "playing");
	}
	class Game {
		constructor (state){
			this.state = state;
			this.tickId = null;
			this.tick = this.tick.bind(this);
			this.render ();
			this.handleClickBox = this.handleClickBox.bind(this);
		}
		static ready() {
			return new Game(state.ready();
		}
		tick(){
			this.setState({ time: this.state.time + 1});
		}
		setState(newstate){
			this.state = {... this.state, ... newstate};
			this.render();
	}
	handleClickBox(box){
		return function (){
			const nextdoorBoxes = bo.getNextdoorBoxes();
			const blankBox = nextdoorBoxes.find(
				nextdoorBoxes => this.state.grid[nextdoorBox.y][nextdoorBox.x] === 0
		 );
			if (blankBox) {
				const newGrid = [...this.state.grid];
				swapBoxes(newGrid,box, blankBox);
				if (isSolved(newGrid)) {
					clearInterval (this.tickId);
					this.setState({
						status: "won",
						grid: newGrid,
						move: this.state.move + 1
					});
				}else{
					this.setState({
						grid: newGrid,
						move: this.state.move + 1
					});

				}
			}
		}.bind(this);
	}
	render(){
		const {grid, move, time, status} = this.state;
		// render grid
		const newGrid = document.createEelement("div");
		newGrid.classname ="grid";
		for (let i = 0; i < 4; i++){
			for (let j = 0; j < 4; j++){
				const button = document.createEelement("button");

				if(status === "playing"){
					button.addEventListener("click", this.handleClickBox())
				}
				button.textcontent = grid[i][j] === 0 ? "": grid [i][j].toString();
				newGrid.appendChild(button);
}
}
document.queryselector(".grid").replaceWith(newGrid);
	// render button
	const newButton = document.createEelement("button");
	if (status === "ready") newButton.textcontent = "play";
	if (status === "playing") newButton.textcontent = "reset"; 
	if (status === "won") newButton.textcontent = "play"; 
	newButton.addEventListener("click", () =>{
		this.tickId = setInterval(this.tick, 1000);
		this.setState(state.start());
	});
	document.queryselector(".footer button").replaceWith(newButton);

	// render move
	document.getElementById("move").textcontent= 'move `${move}';

	// render time
	document.getElementById("time").textcontent= 'time `${move}';

	// render message
	if (status === "won") {
		document.queryselector(".message").textcontent = "you win!";
	}else{
		document.queryselector(".message").textcontent = "";
	}

}
}
const Game= Game.ready();