//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener('click',()=>{
    let p1=new Promise((a,b)=>{
		a(images[0].url);
        
		b(`Failed to load image's URL: ${image[0].url}`);
	});
	let p2=new Promise((a,b)=>{
       
		a(images[1].url);
		b(`Failed to load image's URL: ${image[1].url}`);
	});
	let p3=new Promise((a,b)=>{

		a(images[2].url);
		b(`Failed to load image's URL: ${image[2].url}`);
		
	});
	Promise.all([p1,p2,p3]).then((d)=>{
	d.forEach((item)=>{
        output.innerHTML+=`<img src='${item}' alt='image'>`;});
}).catch((e)=>{
	output.innerHTML=`${e}`;
});
});


