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
this.getToxBox(),
this.getRightBox(),
this.getBottomBox(),
this.getLeftBox(),
	].filter(box => box )
}












}