class movie{
	constructor(name,IDMB,comment)
	{
		this.name=name;
		this.IDMB=IDMB;
		this.comment=comment;
	}
}
let m1=new movie("Sharknado",10,"Goremon");
let m2=new movie('khetam',10,'Zeorton');
let m3=new movie('kzorronmeo',10,'Yaanerate');
let movieList=[m1,m2,m3];

for(let movie of movieList)
{
	console.log(movie.name)
}