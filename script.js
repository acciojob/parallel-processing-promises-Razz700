//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

	let p1=new Promise((a,b)=>{
		resolve(images[0].url);
	});
	let p2=new Promise((a,b)=>{
		resolve(images[1].url);
	});
	let p3=new Promise((a,b)=>{
		resolve(images[2].url);
	});
function f1(p1,p2,p3) {
	return [p1,p2,p3];
}
Promise.all(f1(p1,p2,p3)).then((d)=>{
	output.innerHTML=`<img src='${d}' alt=''>`;
})