


var arrow={ x:"null", 
			y:"null", 
			x1:"null", 
			y1:"null", 
			size:"null", 
			svgNS:"null", 
			line:"null", 
			slopex:"null",
			slopey:"null",
			id:"null",
			
			findSlope:	function(x,y,count){
						if(count==1){
								return ;
							}else{
								if((y%count)== 0 && (x%count)==0){
									this.slopex=x/count;
									this.slopey=y/count;
									count=count-1;	
									return this.findSlope(this.slopex,this.slopey,count);
									}
							count=count-1;
							return this.findSlope(x,y,count);
								}
							},
								
			drawLine: function (){
	    
								this.svgNS = svg.namespaceURI;
								this.line= document.createElementNS(this.svgNS,'polyline');
								this.line.setAttribute('points', this.x + ',' + this.y + ',' + this.x1 + ',' + this.y1);
								this.line.setAttribute('id',this.id);
								this.line.style.stroke="blue";
								svg.appendChild(this.line);
								document.body.appendChild(svg);
								},
		
		
		
			drawTip: function (){
							this.findSlope((this.x1-this.x),(this.y1-this.y),99);
							this.svgNS= svg.namespaceURI;
							this.line= document.createElementNS(this.svgNS,'polyline');
							this.resizeArrowTip(this.size);
							this.line.setAttribute('points', this.x1 + ',' + this.y1 + ',' + (this.x1+this.slopey) + ',' + (this.y1-this.slopex) + ',' + (this.x1+this.slopex) + ',' + (this.y1+this.slopey) + ',' + (this.x1-this.slopey) + ','+ (this.y1+this.slopex));
							this.line.setAttribute('id',this.id+'tip');
							this.line.style.stroke="blue";
							svg.appendChild(this.line);
							document.body.appendChild(svg);
							},
						
			resizeArrowTip:function(){
							this.slopex=this.arrowSizetoMin(this.slopex);
							this.slopey=this.arrowSizetoMin(this.slopey);
							if(this.slopex<this.size/2){this.slopex=this.slopex*this.size/2;};
							if(this.slopey<this.size/2){this.slopey=this.slopey*this.size/2;};
							},
							
			arrowSizetoMin:	function (xy){
								if(xy<0){
									if(xy<(-this.size)){
										xy=xy/this.size;
										this.arrowSizeMin(xy);
									}
			
										}else{
								if(xy>(this.size)){
									xy=xy/size;
								this.arrowSizeMin(xy);
								}	
							}
						return xy;
		
						}
							
							
							
					};





	
					
					
					
function drawArrow(x,y,x1,y1,size){
       
		arrow.id='cc';
		arrow.x=x;
		arrow.y=y;
		arrow.x1=x1;
		arrow.y1=y1;
		arrow.size=size;
		arrow.drawLine();
		arrow.drawTip();
		
       
}



var slopex,slopey;

function findSlope(x,y,count){
						if(count==1){
								return ;
							}else{
								if((y%count)== 0 && (x%count)==0){
									slopex=x/count;
									slopey=y/count;
									count=count-1;	
									return findSlope(slopex,slopey,count);
									}
							count=count-1;
							return findSlope(x,y,count);
								}
							}

							
function resizeArrowTip(size){
							slopex=arrowSizetoMin(slopex,size);
							slopey=arrowSizetoMin(slopey,size);
							if(slopex<size/2){slopex=slopex*size/2;};
							if(slopey<size/2){slopey=slopey*size/2;};
							}

function arrowSizetoMin(xy,size){
								if(xy<0){
									if(xy<(-size)){
										xy=xy/size;
										arrowSizetoMin(xy);
									}
			
										}else{
								if(xy>(size)){
									xy=xy/size;
								arrowSizetoMin(xy);
								}	
							}
						return xy;
		
						}





function moveArrow(x,y,x1,y1,id){

      var Line=document.getElementById(id).getAttribute("points").split(",");
	  document.getElementById(id).setAttribute('points', (Line[0]*1+x*1) + ',' + (Line[1]*1+y*1) + ',' + (Line[2]*1+x1*1) + ',' + (Line[3]*1+y1*1));  
	  //get new points
	  Line=document.getElementById(id).getAttribute("points").split(",");	 
	  var tip=document.getElementById(id+'tip');
	  findSlope((Line[2]*1-Line[0]*1),(Line[3]*1-Line[1]*1),99);
	  resizeArrowTip(8);
	  tip.setAttribute('points', Line[2]*1 + ',' + Line[3]*1 + ',' + (Line[2]*1+slopey) + ',' + (Line[3]*1-slopex) + ',' + (Line[2]*1+slopex) + ',' + (Line[3]*1+slopey) + ',' + (Line[2]*1-slopey) + ','+ (Line[3]*1+slopex));
				
}



function moveArrow1(){
	
	moveArrow(10,20,30,40,"cc");
	


}
