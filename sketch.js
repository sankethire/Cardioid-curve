// let time = 0;
let slider;
// let time = 0;
let l = [];

function setup() {
	createCanvas(1920, 600);
	slider = createSlider(0 , 200, 200);
}

function draw() {
	background(0, 0, 0);
	translate(960, 300);
	let r = 250;
	let theta = (PI/2);
	let n = slider.value();
	stroke(255);
	noFill();
	ellipse(0, 0, r * 2);
	// ellipse(r*cos(PI + (PI/10)), r*sin(PI + (PI/10)), 100);

	for (let i = 0; i < n; i++) {
		fill(255);
		ellipse(r * cos(2 * theta), r * sin(2 * theta), 5)
		let xy = [r * cos(2 * theta), r * sin(2 * theta)];
		l.push(xy) ;
		
		theta += (PI)/n;
	}

	// for (let i = 0; i < slider.value(); i++) {
	// 	if(2*i <= slider.value() ){
			// line(l[0][0], l[0][1], l[2*0][0], l[2*0][1]);		
			// line(l[1][0], l[1][1], l[2][0], l[2][1]);		
			// line(l[2][0], l[2][1], l[4][0], l[4][1]);		
			// line(l[3][0], l[3][1], l[6][0], l[6][1]);		
			// line(l[4][0], l[4][1], l[8][0], l[8][1]);
	
	for (let j = 0 ; j< n ; j++){
			if(2*j < n) {
				line(l[j][0], l[j][1], l[2*j][0], l[2*j][1]);
			}
		else if(2*j > n) {
				line(l[j][0], l[j][1], l[(2*j)%n][0], l[(2*j)%n][1]);
		}
		else if(2*j == n) {
				line(l[j][0], l[j][1], l[0][0], l[0][1]);
		}
// 		else if((2*j)%10 == 0 ){
				
// 		}
	}
			
	
	
	
	// line(l[5][0], l[5][1], l[10][0], l[10][1]);		
			// line(l[2][0], l[2][1], l[2+4][0], l[2+4][1]);		
	// 	}
	// 	else{
	// 		line(l[i][0], l[i][1], l[(2*i)%10][0], l[(2*i)%10][1]);
	// 	}
	// }
	
	// time+=1;
	
}
