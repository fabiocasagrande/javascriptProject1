

var inc=0;
var xx=400;
var yy=50;
var element;

var circle={

			circle:"null",
			x:"null", 
			y:"null", 
			r:"null",
			txPos:"null",
			tyPos:"null",
			svgNS:"null", 
			text:"null",
			value:"null",
			id:"null",


			drawCircle: function(){
      
    			this.svgNS = svg.namespaceURI;
				this.circle= document.createElementNS(this.svgNS,'circle');
				this.circle.setAttribute('cx',this.x);
				this.circle.setAttribute('cy',this.y);
				this.circle.setAttribute("r",this.r); 
				this.circle.setAttribute('fill','#95B3D7');
				this.circle.setAttribute('id',this.id);
				this.text=document.createElementNS(this.svgNS,'text');

				this.txPos=this.x;
				this.tyPos=this.y+3;

				if(this.value>9){
					this.txPos=this.txPos-8;
				}else{
					this.txPos=this.txPos-4;
				}
	   
	   
				this.text.setAttribute('x', this.txPos);
				this.text.setAttribute('y', this.tyPos);
				this.text.setAttribute('id',this.id+'value');
				this.text.textContent = this.value;
				this.text.style.stroke="red";
				svg.appendChild(this.circle);
				svg.appendChild(this.text);
				document.body.appendChild(svg);

}


};






function drawCircle(x,y,value){

			circle.x=x; 
			circle.y=y; 
			circle.r=10;
			circle.value=value;
			circle.id=value;
			circle.drawCircle();
			
}


function changeValue(id,value){
	element=document.getElementById(id);
	element.innerHTML=value;
}



function moveElement(x,y,id){

	element=document.getElementById(id);
	element.setAttribute('cx',x);
	element.setAttribute('cy',y);
	element=document.getElementById(id+"value");
	element.setAttribute('x',x);
	element.setAttribute('y',y+3);
				
	if(element.innerHTML>9){
		element.setAttribute('x',x-8);
	}else{
		element.setAttribute('x',x-4);
		}

}



function changeElementSize(radius,id){
	element=document.getElementById(id);
	element.setAttribute('r',radius);

}


function circle1(){

	drawCircle(xx,yy,inc);
	xx=xx+50;
	inc=inc+1;
}
/*

function drawCircle(x,y,numb){
      
       var svgNS = svg.namespaceURI;
       var circle= document.createElementNS(svgNS,'circle');
       circle.setAttribute('cx',x);
       circle.setAttribute('cy',y);
       circle.setAttribute("r","20" ); 
       circle.setAttribute('fill','#95B3D7');
       
       var text=document.createElementNS(svgNS,'text');

       var txPos=x;
       var tyPos=y+3;

       if(numb>9){
       txPos=txPos-8;
       }else{
         txPos=txPos-4;
       }
	   
	   
       text.setAttribute('x', txPos);
       text.setAttribute('y', tyPos);
       text.textContent = numb;
       text.style.stroke="red";
       svg.appendChild(circle);
       svg.appendChild(text);
       document.body.appendChild(svg);

}
*/
