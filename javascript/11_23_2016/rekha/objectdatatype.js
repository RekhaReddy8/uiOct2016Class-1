var x={
    firstname:'rekha',
    lastname:'kethu'
};
var y={
    rollnumber:89,
    address:'kamareddy',
    z:{
        firstname:'akiramruthy',
        lastname:'sethu',
        w:{
            ispresent:true,
            isexist:undefined,
            fileno:45

        }

    }
};
//for data update which is given in the above
//this is dot notation
x.lastname='sangeetha';
y.z.w.fileno=48;
console.log(y);
console.log(y.z);

/*
 y ='sangi';
 w=47;
 */
 //for output we need to write following code
//for data update with property notation
x['firstname']='reddy';
//y[z[w[fileno]]]=90;
y.z.w['fileno']=89;
console.log(x);
console.log(y);
console.log();

