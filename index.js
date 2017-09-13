;(function () {
    let doc = window.document;
    let header = doc.getElementById('header');
    let add = doc.getElementById('add');
    let btn = doc.getElementById('btn');
    let vis = doc.getElementById('visible');
    let creattelefon = doc.getElementById('plus_t');
    let createmail = doc.getElementById('plus_e');

    let bvc = 0;
    let bvx = 0;
    console.log('hi'+bvc);

    creattelefon.addEventListener('click', function () {
        let block = document.getElementById('creattel_block');
        let telefnum = localStorage.length;
        bvc++;
        let block2 = block.cloneNode(true);
        block2.id= telefnum*10000+100*bvc;
        block2.style.display = 'block';
        block2.querySelector('input').value= '';
        block2.querySelector('i').style.display= 'inline-block';
       // block2.querySelector('.title_1').style.display= 'none';
        document.getElementById("creattel").appendChild(block2);
        console.log('hi1 '+bvc);
    });


    createmail.addEventListener('click', function () {
        let block = document.getElementById('createmail_block');
        let emanum = localStorage.length;
        bvx++;
        let block2 = block.cloneNode(true);
        block2.id= emanum*100000+100*bvx;
        block2.style.display = 'block';
        block2.querySelector('input').value= '';
        block2.querySelector('i').style.display= 'inline-block';
        document.getElementById("createmail").appendChild(block2);
        console.log('hi1 '+bvx);
    });




    let content = function () {
        document.getElementById("content").innerText='';
        for(let j=0;j<localStorage.length;j++){
            let block = doc.createElement('div');
            let miniblock = localStorage.getItem(j) ;
            let maxblock = JSON.parse(miniblock);
            block.id = maxblock.ids ;
            block.className ='cont';
            block.innerHTML = "<span class='left'>"+ maxblock.fist +"  "+ maxblock.second + "</span>  <span class='right'> <i class='fa fa-angle-double-right' aria-hidden='true' title='детальна інофрмація'  onclick='maxconent(this)'></i></span>";
            document.getElementById("content").appendChild(block);
        }
    };
    content();
     add.addEventListener('click', function () {

         header.style.backgroundColor = '#e6cece';
         header.style.width = '320px';
         header.style.display = 'block';
         vis.style.display = 'none';
         doc.getElementById('content').style.display = 'none';
         doc.getElementById('prosmotr').style.display = 'none';
     });


    let bg = function () {


        let i =localStorage.length;



        let fist =  document.getElementById('firstname').value;
        let second = document.getElementById('secondname').value;

        let tableElem = document.getElementById('creattel');
        let elements = tableElem.getElementsByTagName('input');
        let tel =[];
        let clicktel=0;
        for (let nbv = 0; nbv < elements.length; nbv++) {
            let input = elements[nbv];
            if(input.value!='') {
                tel[clicktel] = input.value;
                console.log(input.value);
                clicktel++;
            }
        }
        let telnum = 0;
        telnum = tel.length;
        let tableElem1 = document.getElementById('createmail');
        let elements1 = tableElem1.getElementsByTagName('input');
        let email =[];
        let clicktel1=0;
        for (let nbv1 = 0; nbv1 < elements1.length; nbv1++) {
            let input = elements1[nbv1];

            if(input.value!='') {
                email[clicktel1] = input.value;
                console.log(input.value);
                clicktel1++;
            }
        }

        let emailnum = 0;
        emailnum = email.length;




        if ((fist !='')&&(second !='')&&(tel[0]!='')){
            let block = document.getElementById('creattel_block');
            let block2 = block.cloneNode(true);
            block2.id= 'creattel_block';
            document.getElementById("creattel").innerText=' ';
            document.getElementById("creattel").appendChild(block2);

            let bloc = document.getElementById('createmail_block');
            let bloc2 = bloc.cloneNode(true);
            bloc2.id= 'createmail_block';
            document.getElementById("createmail").innerText=' ';
            document.getElementById("createmail").appendChild(bloc2);

            let contacts={fist:fist,second:second,tel:tel,telnum:telnum,email:email,emailnum:emailnum,ids:i};
            vis.style.display = 'block';
            header.style.display = 'none';
            doc.getElementById('content').style.display = 'block';
            localStorage.setItem(i,JSON.stringify(contacts));


            let yblock = document.getElementById('creattel_block');
            yblock.querySelector('input').value='';
            yblock = document.getElementById('createmail_block');
            yblock.querySelector('input').value='';


            document.getElementById('firstname').value='';
            document.getElementById('secondname').value='';
            //document.getElementById('telefon').value='';
            //document.getElementById('email').value='';
            mass();
            content();
            bvc=0;
            bvx=0;


            document.getElementById("error").innerHTML=' ';
        }
        else {
            console.log("Не всі поля заполнені");
            document.getElementById("error").innerText='Імя,фамілія,перше поле телефону обовязково повино бути заповнено';

        }




    };
    document.getElementById('btn').addEventListener('click', bg);
})();
function maxconent(obj1) {
    document.getElementById('header').style.display = 'none';
    document.getElementById("visible").style.display = 'none';
    document.getElementById("content").style.display = 'none';
    document.getElementById("prosmotr").style.display = 'block';
    let tmp = obj1.parentNode.parentNode.id;
    let miniblock = localStorage.getItem(tmp) ;
    let maxblock = JSON.parse(miniblock);
    document.getElementById("pfirstname").value = maxblock.fist;
    document.getElementById("psecondname").value = maxblock.second;

    document.getElementById("prosmtel").innerText=' ';
    document.getElementById("prosmtel").innerHTML="<div id='prosmtel_block' > <input disabled='disabled' class='telcss' pattern='[+]380-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}' maxlength='17' class='telcss' onclick='pmask(this)' onblur='ptelchange(this)' > <i class='fa fa-times' aria-hidden='true' onclick='delet(this)' title='Удалить телефон'> </i> </div>";

    let telenumber = maxblock.tel;
    let block = document.getElementById('prosmtel_block');
    block.querySelector('input').value= telenumber[0];
    let num=0;
    let block2 =[];

    for(let i1= 1;i1<telenumber.length;i1++){
        block2[i1] = block.cloneNode(true);
        block2[i1].style.display='block';
        num++;
        block2[i1].id=num*1000000;

        block2[i1].querySelector('input').value= telenumber[i1];
        block2[i1].querySelector('input').id=block2[i1].id+1 ;
        document.getElementById("prosmtel").appendChild(block2[i1]);

    }
    document.getElementById("prosmtel_block").innerHTML="<input disabled='disabled' class='telcss'> ";

    block.querySelector('input').value= telenumber[0];


    document.getElementById("prosmemail").innerText=' ';
    document.getElementById("prosmemail").innerHTML="<div id='prosmemail_block' ><input  disabled='disabled' class='telcss' type='email' pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$' maxlength='30'  onchange='pechange(this)'> <i  class='fa fa-times' aria-hidden='true' onclick='delet(this)' title='Удалить Email'> </i> </div>";

    let telenumber1 = maxblock.email;
    let blocky = document.getElementById('prosmemail_block');

    let numy=0;
    let block2y =[];

    for(let i1= 1;i1<telenumber1.length;i1++){
        block2y[i1] = blocky.cloneNode(true);
        block2y[i1].style.display='block';

        numy++;
        block2y[i1].id= numy*10000000;
        block2y[i1].querySelector('input').value= telenumber1[i1];
        block2y[i1].querySelector('input').id=block2y[i1].id+1 ;
        document.getElementById("prosmemail").appendChild(block2y[i1]);

    }
    document.getElementById("prosmemail_block").innerHTML="  <input disabled='disabled' type='email' pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$' maxlength='30'  onchange='pechange(this)' class='telcss'> ";
    blocky.querySelector('input').value= telenumber1[0];

    document.getElementById("pid").value = maxblock.ids;
    console.log(obj1.parentNode.id);

    mass();

}

function minconent() {

    let tmp = document.getElementById("pid").value;
    console.log(tmp);
    document.getElementById('header').style.display = 'none';
    document.getElementById("visible").style.display = 'block';
    document.getElementById("content").style.display = 'block';
    document.getElementById("prosmotr").style.display = 'none';


    mass();
    let temp2 = mass();

    temp2.splice(tmp,1);

    for(i=0;i<temp2.length;i++){
        temp2[i].ids=i;
        localStorage.setItem(i,JSON.stringify(temp2[i]));
    }
    localStorage.removeItem(temp2.length);

    //document.getElementById(tmp).remove();

    document.getElementById("content").innerText=' ';
    for(let j=0;j<localStorage.length;j++){
        let block = document.createElement('div');
        let miniblock = localStorage.getItem(j) ;
        let maxblock = JSON.parse(miniblock);

        block.id = maxblock.ids ;
        block.className ='cont';
        block.innerHTML = "<span class='left'>"+ maxblock.fist +"  "+ maxblock.second + "</span>  <span class='right'> <i class='fa fa-angle-double-right' aria-hidden='true' title='детальна інофрмація'  onclick='maxconent(this)'></i></span>";
        document.getElementById("content").appendChild(block);

    }
}

let mass = function () {

    let  temp = [];

    for(i=0;i<localStorage.length;i++){
        let tempp= localStorage.getItem(i);
        temp[i]=JSON.parse(tempp);
    }

    let temp1 = temp;


    temp1.sort(function (a, b) {
        if (a.fist > b.fist) {
            return 1;
        }
        if (a.fist < b.fist) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    });

    for(i=0;i<localStorage.length;i++){
        temp1[i].ids=i;
        localStorage.setItem(i,JSON.stringify(temp1[i]));
    }
    let temp2 = temp1;
    let content = function () {

        document.getElementById("content").innerText=' ';
        for(let j=0;j<localStorage.length;j++){
            let block = document.createElement('div');
            let miniblock = localStorage.getItem(j) ;
            let maxblock = JSON.parse(miniblock);

            block.id = maxblock.ids ;
            block.className ='cont';
            block.innerHTML =  "<span class='left'>"+ maxblock.fist +"  "+ maxblock.second + "</span>  <span class='right'> <i class='fa fa-angle-double-right' aria-hidden='true' title='детальна інофрмація'  onclick='maxconent(this)'></i></span>";
            document.getElementById("content").appendChild(block);

        }


    };
    content();

    return temp2;
} ;

let min = function () {
    window.document.getElementById('header').style.display = 'none';
    window.document.getElementById("visible").style.display = 'block';
    window.document.getElementById("content").style.display = 'block';
    window.document.getElementById("prosmotr").style.display = 'none';


    let  temp = [];

    for(i=0;i<localStorage.length;i++){
        let tempp= localStorage.getItem(i);
        temp[i]=JSON.parse(tempp);
    }

    let temp1 = temp;


    temp1.sort(function (a, b) {
        if (a.fist > b.fist) {
            return 1;
        }
        if (a.fist < b.fist) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    });

    for(i=0;i<localStorage.length;i++){
        temp1[i].ids=i;
        localStorage.setItem(i,JSON.stringify(temp1[i]));
    }
    let temp2 = temp1;

    document.getElementById("content").innerText=' ';
    for(let j=0;j<localStorage.length;j++){
        let block = document.createElement('div');
        let miniblock = localStorage.getItem(j) ;
        let maxblock = JSON.parse(miniblock);

        block.id = maxblock.ids ;
        block.className ='cont';
        block.innerHTML =  "<span class='left'>"+ maxblock.fist +"  "+ maxblock.second + "</span>  <span class='right'> <i class='fa fa-angle-double-right' aria-hidden='true' title='детальна інофрмація'  onclick='maxconent(this)'></i></span>";
        document.getElementById("content").appendChild(block);

    }
    document.getElementById("firstname").value='';
    document.getElementById("secondname").value='';
    let bblock = document.getElementById('creattel_block');
    let bblock2 = bblock.cloneNode(true);
    bblock2.id= 'creattel_block';
    document.getElementById("creattel").innerText=' ';
    document.getElementById("creattel").appendChild(bblock2);

    let bbloc = document.getElementById('createmail_block');
    let bbloc2 = bbloc.cloneNode(true);
    bbloc2.id= 'createmail_block';
    document.getElementById("createmail").innerText=' ';
    document.getElementById("createmail").appendChild(bbloc2);

    document.getElementById("error").innerHTML=' ';
    document.getElementById("errorI").innerHTML=' ';
    document.getElementById("errorF").innerHTML=' ';
    document.getElementById("errortel").innerHTML=' ';
    document.getElementById("errorem").innerHTML=' ';
};




let search = function () {


    document.getElementById('search').addEventListener('keyup', function () {
        let  temp = [];


        for(i=0;i<localStorage.length;i++){
            let tempp= localStorage.getItem(i);
            temp[i]=JSON.parse(tempp);
        }

        let temp2 = temp;

        document.getElementById("content").innerText='';


        for(let j=0;j<localStorage.length;j++){
            let tmp = document.getElementById('search').value;
            let tmp2=temp2[j].fist;
            let tmp4=temp2[j].second;

            let tmp3=[];
            let tmp5=[];
            for(let i=0;i<tmp.length;i++){
                tmp3[i]= tmp2[i];
                tmp5[i]= tmp4[i];
            }
            let arr = tmp3.join('');
            let arr1 = tmp5.join('');



            let block = document.createElement('div');
            let miniblock = localStorage.getItem(j) ;
            let maxblock = JSON.parse(miniblock);
            block.id = maxblock.ids ;
            block.className ='cont';
            if ((tmp.toLowerCase() == arr.toLowerCase())||(tmp.toLowerCase() == arr1.toLowerCase())){

                    block.innerHTML = "<span class='left'>"+ maxblock.fist +"  "+ maxblock.second + "</span>  <span class='right'> <i class='fa fa-angle-double-right' aria-hidden='true' title='детальна інофрмація'  onclick='maxconent(this)'></i></span>";
                    document.getElementById("content").appendChild(block);


            }

        }

        let childNode = document.getElementById("content").firstChild;

        if(childNode==null){
            let block = document.createElement('div');
            document.getElementById("content").innerHTML='';
            block.innerHTML = 'Нічого не знайдено';
            document.getElementById("content").appendChild(block);
        }
    });

};
search();


 let del= function (obj) {
     let idpar=obj.parentNode.id;

     document.getElementById(idpar).remove();
     console.log(idpar);
 };



let re=function (obj) {
    let id = obj.parentNode.id;
    console.log(id);
    let tmp =document.getElementById(id).querySelector('input').id ;
    document.getElementById(tmp).disabled = false;
    return id;
};


let save = function (obj) {
    let id = obj.parentNode.id;
    let idp = obj.parentNode.parentNode.id;
    let tmp =document.getElementById(id).querySelector('input').id ;
    document.getElementById(tmp).disabled = true;
    let temp =document.getElementById('pid').value;
    console.log(tmp);
    let tempp= localStorage.getItem(temp);
    let temp1=JSON.parse(tempp);

    let tp ;

    if(tmp=='pfirstname'){

        temp1.fist=document.getElementById(tmp).value;
        localStorage.setItem(temp,JSON.stringify(temp1));


    }
    if(tmp=='psecondname'){

        temp1.second=document.getElementById(tmp).value;
        localStorage.setItem(temp,JSON.stringify(temp1));

    }

    if(idp=='prosmtel'){
        tp = Math.floor(tmp/10000000)-1;
        temp1.tel[tp]=document.getElementById(tmp).value;
        localStorage.setItem(temp,JSON.stringify(temp1));

    }
    if(idp=='prosmemail'){
        tp = Math.floor(tmp/100000000)-1;
        temp1.email[tp]=document.getElementById(tmp).value;
        localStorage.setItem(temp,JSON.stringify(temp1));
    }


};

let delet = function (obj) {
    let id = obj.parentNode.id;
    let idp = obj.parentNode.parentNode.id;
    console.log(id);
    let tmp =document.getElementById(id).querySelector('input').id ;
    document.getElementById(tmp).disabled = true;
    let temp =document.getElementById('pid').value;
    console.log(tmp);
    let tempp= localStorage.getItem(temp);
    let temp1=JSON.parse(tempp);
    let tp ;


    if(idp=='prosmtel'){
        tp = Math.floor(tmp/10000000)-1;
        tp++;
        temp1.tel.splice(tp,1);
        console.log(temp1);
        localStorage.setItem(temp,JSON.stringify(temp1));
        document.getElementById("prosmtel").innerText=' ';
        document.getElementById("prosmtel").innerHTML="<div id='prosmtel_block' > <input  disabled='disabled' class='telcss' pattern='[+]380-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}' maxlength='17' class='telcss' onclick='pmask(this)' onblur='ptelchange(this)'>  <i class='fa fa-times' aria-hidden='true' onclick='delet(this)' title='Удалить телефон'> </i> </div>";
        let temp3 =document.getElementById('pid').value;

        let miniblock = localStorage.getItem(temp3) ;

        let maxblock = JSON.parse(miniblock);
        console.log(maxblock);
        let telenumber = maxblock.tel;


        let block = document.getElementById('prosmtel_block');
        let num=0;
        let block2 =[];
        let i2 =telenumber.length;

        for(let i1= 1;i1<i2;i1++){
            block2[i1] = block.cloneNode(true);
            block2[i1].style.display='block';
            num++;
            block2[i1].id=num*1000000;

            block2[i1].querySelector('input').value= telenumber[i1];

            block2[i1].querySelector('input').id=block2[i1].id+1 ;
            document.getElementById("prosmtel").appendChild(block2[i1]);
        }

        document.getElementById("prosmtel_block").innerHTML="<input  disabled='disabled' class='telcss' pattern='[+]380-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}' maxlength='17' class='telcss' onclick='pmask(this)' onblur='ptelchange(this)'> ";
        block.querySelector('input').value= telenumber[0];


    }

    if(idp=='prosmemail'){
        tp = Math.floor(tmp/100000000)-1;
        tp++;
        temp1.email.splice(tp,1);
        console.log(temp1);
        localStorage.setItem(temp,JSON.stringify(temp1));
        document.getElementById("prosmemail").innerText=' ';
        document.getElementById("prosmemail").innerHTML="<div id='prosmemail_block' >  <input disabled='disabled' type='email' pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$' maxlength='30'  onchange='pechange(this)' class='telcss'> <i class='fa fa-times' aria-hidden='true' onclick='delet(this)' title='Удалить Email'> </i> </div>";
        let temp3 =document.getElementById('pid').value;

        let miniblock = localStorage.getItem(temp3) ;

        let maxblock = JSON.parse(miniblock);
        console.log(maxblock);
        let telenumber = maxblock.email;


        let block = document.getElementById('prosmemail_block');
        let num=0;
        let block2 =[];
        let i2 =telenumber.length;

        for(let i1= 1;i1<i2;i1++){
            block2[i1] = block.cloneNode(true);
            block2[i1].style.display='block';
            num++;
            block2[i1].id=num*100000000;

            block2[i1].querySelector('input').value= telenumber[i1];

            block2[i1].querySelector('input').id=block2[i1].id+1 ;
            document.getElementById("prosmemail").appendChild(block2[i1]);
        }

        document.getElementById("prosmemail_block").innerHTML=" <input disabled='disabled' type='email' pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$' maxlength='30'  onchange='pechange(this)' class='telcss'> ";
        block.querySelector('input').value= telenumber[0];

    }

};

let plus_1 = function () {
    let tmp =  window.document.getElementById('pid').value;
    let miniblock3 = localStorage.getItem(tmp) ;
    let maxblock3 = JSON.parse(miniblock3);
    document.getElementById("pfirstname").value = maxblock3.fist;
    document.getElementById("psecondname").value = maxblock3.second;

    document.getElementById("prosmtel").innerText=' ';
    document.getElementById("prosmtel").innerHTML="<div id='prosmtel_block' > <input disabled='disabled' class='telcss' pattern='[+]380-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}' maxlength='17' class='telcss' onclick='pmask(this)' onblur='ptelchange(this)' > <i class='fa fa-times' aria-hidden='true' onclick='delet(this)' title='Удалить телефон'> </i> </div>";

    let telenumber3 = maxblock3.tel;
    let block3 = document.getElementById('prosmtel_block');
    block3.querySelector('input').value= telenumber3[0];
    let num3=0;
    let block23 =[];

    for(let i1= 1;i1<telenumber3.length;i1++){
        block23[i1] = block3.cloneNode(true);
        block23[i1].style.display='block';
        num3++;
        block23[i1].id=num3*1000000;

        block23[i1].querySelector('input').value= telenumber3[i1];
        block23[i1].querySelector('input').id=block23[i1].id+1 ;
        document.getElementById("prosmtel").appendChild(block23[i1]);

    }
    document.getElementById("prosmtel_block").innerHTML="<input disabled='disabled' class='telcss'>  pattern='[+]380-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}' maxlength='17' class='telcss' onclick='pmask(this)' onblur='ptelchange(this)' ";

    block3.querySelector('input').value= telenumber3[0];


    document.getElementById("prosmemail").innerText=' ';
    document.getElementById("prosmemail").innerHTML="<div id='prosmemail_block' ><input  disabled='disabled' class='telcss' type='email' pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$' maxlength='30'  onchange='pechange(this)'> <i  class='fa fa-times' aria-hidden='true' onclick='delet(this)' title='Удалить Email'> </i> </div>";

    let telenumber1 = maxblock3.email;
    let blocky = document.getElementById('prosmemail_block');

    let numy=0;
    let block2y =[];

    for(let i1= 1;i1<telenumber1.length;i1++){
        block2y[i1] = blocky.cloneNode(true);
        block2y[i1].style.display='block';

        numy++;
        block2y[i1].id= numy*10000000;
        block2y[i1].querySelector('input').value= telenumber1[i1];
        block2y[i1].querySelector('input').id=block2y[i1].id+1 ;
        document.getElementById("prosmemail").appendChild(block2y[i1]);

    }
    document.getElementById("prosmemail_block").innerHTML="  <input disabled='disabled' type='email' pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$' maxlength='30'  onchange='pechange(this)' class='telcss'> ";
    blocky.querySelector('input').value= telenumber1[0];
    document.getElementById("pid").value = maxblock3.ids;


    mass();



    document.getElementById("prosmtel").innerText=' ';
    document.getElementById("prosmtel").innerHTML="<div id='prosmtel_block'> <input disabled='disabled' class='telcss' pattern='[+]380-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}' maxlength='17' class='telcss' onclick='pmask(this)' onblur='ptelchange(this)'>  <i class='fa fa-times' aria-hidden='true' onclick='delet(this)' title='Удалить телефон'> </i> </div>";
    let temp =document.getElementById('pid').value;
        let miniblock = localStorage.getItem(temp) ;
        let maxblock = JSON.parse(miniblock);
         console.log(maxblock);
        let telenumber = maxblock.tel;
        let block = document.getElementById('prosmtel_block');
        let num=0;
        let block2 =[];
        let i2 =telenumber.length;
        i2++;
        for(let i1= 1;i1<i2;i1++){
            block2[i1] = block.cloneNode(true);
            block2[i1].style.display='block';
            num++;
            block2[i1].id=num*1000000;

            block2[i1].querySelector('input').value= telenumber[i1];

            block2[i1].querySelector('input').id=block2[i1].id+1 ;
            document.getElementById("prosmtel").appendChild(block2[i1]);
        }
    i2--;
    block2[i2].querySelector('input').value= '';
    block2[i2].querySelector('input').disabled= false;
    document.getElementById("prosmtel_block").innerHTML=" <input  disabled='disabled' class='telcss' pattern='[+]380-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}' maxlength='17' class='telcss' onclick='pmask(this)' onblur='ptelchange(this)'>";
    block.querySelector('input').value= telenumber[0];


    let header = window.document.getElementById('header');
    let vis = window.document.getElementById('visible');
    vis.style.display = 'none';
    header.style.display = 'none';
    window.document.getElementById('content').style.display = 'none';





};

let plus_2 = function () {

    let tmp =  window.document.getElementById('pid').value;
    let miniblock3 = localStorage.getItem(tmp) ;
    let maxblock3 = JSON.parse(miniblock3);
    document.getElementById("pfirstname").value = maxblock3.fist;
    document.getElementById("psecondname").value = maxblock3.second;

    document.getElementById("prosmtel").innerText=' ';
    document.getElementById("prosmtel").innerHTML="<div id='prosmtel_block' > <input disabled='disabled' class='telcss' pattern='[+]380-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}' maxlength='17' class='telcss' onclick='pmask(this)' onblur='ptelchange(this)' > <i class='fa fa-times' aria-hidden='true' onclick='delet(this)' title='Удалить телефон'> </i> </div>";

    let telenumber3 = maxblock3.tel;
    let block3 = document.getElementById('prosmtel_block');
    block3.querySelector('input').value= telenumber3[0];
    let num3=0;
    let block23 =[];

    for(let i1= 1;i1<telenumber3.length;i1++){
        block23[i1] = block3.cloneNode(true);
        block23[i1].style.display='block';
        num3++;
        block23[i1].id=num3*1000000;

        block23[i1].querySelector('input').value= telenumber3[i1];
        block23[i1].querySelector('input').id=block23[i1].id+1 ;
        document.getElementById("prosmtel").appendChild(block23[i1]);

    }
    document.getElementById("prosmtel_block").innerHTML="<input disabled='disabled' class='telcss'  pattern='[+]380-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}' maxlength='17' class='telcss' onclick='pmask(this)' onblur='ptelchange(this)'> ";

    block3.querySelector('input').value= telenumber3[0];


    document.getElementById("prosmemail").innerText=' ';
    document.getElementById("prosmemail").innerHTML="<div id='prosmemail_block' ><input  disabled='disabled' class='telcss' type='email' pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$' maxlength='30'  onchange='pechange(this)'> <i  class='fa fa-times' aria-hidden='true' onclick='delet(this)' title='Удалить Email'> </i> </div>";

    let telenumber1 = maxblock3.email;
    let blocky = document.getElementById('prosmemail_block');

    let numy=0;
    let block2y =[];

    for(let i1= 1;i1<telenumber1.length;i1++){
        block2y[i1] = blocky.cloneNode(true);
        block2y[i1].style.display='block';

        numy++;
        block2y[i1].id= numy*10000000;
        block2y[i1].querySelector('input').value= telenumber1[i1];
        block2y[i1].querySelector('input').id=block2y[i1].id+1 ;
        document.getElementById("prosmemail").appendChild(block2y[i1]);

    }
    document.getElementById("prosmemail_block").innerHTML="  <input disabled='disabled' type='email' pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$' maxlength='30'  onchange='pechange(this)' class='telcss'> ";
    blocky.querySelector('input').value= telenumber1[0];
    document.getElementById("pid").value = maxblock3.ids;


    mass();







    document.getElementById("prosmemail").innerText=' ';
    document.getElementById("prosmemail").innerHTML="<div id='prosmemail_block' >  <input disabled='disabled' class='telcss' type='email' pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$' maxlength='30'  onchange='pechange(this)'> </i> <i class='fa fa-times' aria-hidden='true' onclick='delet(this)' title='Удалить Email'> </i> </div>";
    let temp =document.getElementById('pid').value;
    let miniblock = localStorage.getItem(temp) ;
    let maxblock = JSON.parse(miniblock);
    console.log(maxblock);
    let telenumber = maxblock.email;
    let block = document.getElementById('prosmemail_block');
    let num=0;
    let block2 =[];
    let i2 =telenumber.length;
    i2++;
    for(let i1= 1;i1<i2;i1++){
        block2[i1] = block.cloneNode(true);
        block2[i1].style.display='block';
        num++;
        block2[i1].id=num*10000000;
        block2[i1].querySelector('input').value= telenumber[i1];
        block2[i1].querySelector('input').id=block2[i1].id+1 ;
        document.getElementById("prosmemail").appendChild(block2[i1]);
    }

    i2--;
    block2[i2].querySelector('input').value= '';
    block2[i2].querySelector('input').disabled= false;
    document.getElementById("prosmemail_block").innerHTML="  <input disabled='disabled' type='email' pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$' maxlength='30'  onchange='pechange(this)' class='telcss'> ";
    block.querySelector('input').value= telenumber[0];
    let header = window.document.getElementById('header');
    let vis = window.document.getElementById('visible');
    vis.style.display = 'none';
    header.style.display = 'none';
    window.document.getElementById('content').style.display = 'none';



};
let mask = function (obj) {
    let tmp = obj.parentNode.id;
    console.log(tmp);
    document.getElementById(tmp).querySelector('input').value='+380-';

};

let telchange = function (obj) {
    let tmp = obj.parentNode.id;
    let temp = document.getElementById(tmp).querySelector('input').validity.valid;
    if(temp===false){
        document.getElementById(tmp).querySelector('input').value='';
        document.getElementById("errortel").innerHTML='Невірно ведено телефон';
    }

    else {
        document.getElementById("errortel").innerHTML='';
    }


};

let Ichange = function (obj) {
    let tmp = obj.parentNode.id;
    let temp = document.getElementById(tmp).querySelector('input').validity.valid;
    if(temp===false){
        document.getElementById(tmp).querySelector('input').value='';
        document.getElementById("errorI").innerHTML='Невірно ведено ім\'я. Використовуйте лише букви.';
    }
    else {
        document.getElementById("errorI").innerHTML='';
    }

};

let Fchange = function (obj) {
    let tmp = obj.parentNode.id;
    let temp = document.getElementById(tmp).querySelectorAll('input')[1].validity.valid;
    if(temp===false){
        document.getElementById(tmp).querySelectorAll('input')[1].value='';
        document.getElementById("errorF").innerHTML='Невірно ведено фамілію. Використовуйте лише букви.';
    }
    else {
        document.getElementById("errorF").innerHTML='';
    }
};

let echange = function (obj) {
    let tmp = obj.parentNode.id;
    let temp = document.getElementById(tmp).querySelector('input').validity.valid;
    if(temp===false){
        document.getElementById(tmp).querySelector('input').value='';
        document.getElementById("errorem").innerHTML='Невірно ведено email';
    }

    else {
        document.getElementById("errorem").innerHTML='';
    }


};

let pmask = function (obj) {
    let tmp = obj.parentNode.id;
    console.log(tmp);
    document.getElementById(tmp).querySelector('input').value='+380-';

};

let ptelchange = function (obj) {
    let tmp = obj.parentNode.id;
    let temp = document.getElementById(tmp).querySelector('input').validity.valid;
    if(temp===false){
        document.getElementById(tmp).querySelector('input').value='';
        document.getElementById("perrortel").innerHTML='Невірно ведено телефон';
    }

    else {
        document.getElementById("perrortel").innerHTML='';
    }


};

let pIchange = function (obj) {
    let tmp = obj.parentNode.id;
    console.log(tmp);
    let temp = document.getElementById(tmp).querySelector('input').validity.valid;
    if(temp===false){
        document.getElementById(tmp).querySelector('input').value='';
        document.getElementById("perrorI").innerHTML='Невірно ведено ім\'я. Використовуйте лише букви.';
    }
    else {
        document.getElementById("perrorI").innerHTML='';
    }

};

let pFchange = function (obj) {
    let tmp = obj.parentNode.id;
    console.log(tmp);
    let temp = document.getElementById(tmp).querySelector('input').validity.valid;
    if(temp===false){
        document.getElementById(tmp).querySelectorAll('input')[0].value='';
        document.getElementById("perrorF").innerHTML='Невірно ведено фамілію. Використовуйте лише букви.';
    }
    else {
        document.getElementById("perrorF").innerHTML='';
    }
};

let pechange = function (obj) {
    let tmp = obj.parentNode.id;
    let temp = document.getElementById(tmp).querySelector('input').validity.valid;
    if(temp===false){
        document.getElementById(tmp).querySelector('input').value='';
        document.getElementById("perrorem").innerHTML='Невірно ведено email';
    }

    else {
        document.getElementById("perrorem").innerHTML='';
    }


};

let repl = function () {

    let tableElem = document.getElementById('prosmotr');
    let elements = tableElem.getElementsByTagName('input');
    for (let nbv= 0; nbv < elements.length; nbv++) {

        elements[nbv].disabled=false;

        console.log(elements[nbv]);
    }


};

let sav = function () {

    
    let i = document.getElementById('pid').value;
    console.log(i);


    let doc = window.document;
    let header = doc.getElementById('header');

    let vis = doc.getElementById('visible');


    let fist =  document.getElementById('pfirstname').value;
    let second = document.getElementById('psecondname').value;

    let tableElem = document.getElementById('prosmtel');
    let elements = tableElem.getElementsByTagName('input');
    let tel =[];
    let clicktel=0;
    for (let nbv = 0; nbv < elements.length; nbv++) {
        let input = elements[nbv];
        if(input.value!='') {
            tel[clicktel] = input.value;
            console.log(input.value);
            clicktel++;
        }
    }
    let telnum = 0;
    telnum = tel.length;
    let tableElem1 = document.getElementById('prosmemail');
    let elements1 = tableElem1.getElementsByTagName('input');
    let email =[];
    let clicktel1=0;
    for (let nbv1 = 0; nbv1 < elements1.length; nbv1++) {
        let input = elements1[nbv1];

        if(input.value!='') {
            email[clicktel1] = input.value;
            console.log(input.value);
            clicktel1++;
        }
    }

    let emailnum = 0;
    emailnum = email.length;




    if ((fist !='')&&(second !='')&&(tel[0]!='')){
        let block = document.getElementById('prosmtel_block');
        let block2 = block.cloneNode(true);
        block2.id= 'prosmtel_block';
        document.getElementById("prosmtel").innerText=' ';
        document.getElementById("prosmtel").appendChild(block2);

        let bloc = document.getElementById('prosmemail_block');
        let bloc2 = bloc.cloneNode(true);
        bloc2.id= 'prosmemail_block';
        document.getElementById("prosmemail").innerText=' ';
        document.getElementById("prosmemail").appendChild(bloc2);

        let contacts={fist:fist,second:second,tel:tel,telnum:telnum,email:email,emailnum:emailnum,ids:i};
        vis.style.display = 'block';
        header.style.display = 'none';
        doc.getElementById('content').style.display = 'block';
        localStorage.setItem(i,JSON.stringify(contacts));

        document.getElementById("perror").innerHTML=' ';
    }
    else {
        console.log("Не всі поля заполнені");
        document.getElementById("perror").innerText='Імя,фамілія,перше поле телефону обовязково повино бути заповнено';

    }





};










