var ret="";

function convetir(letra)
{
    switch (letra)
    {
        case 'a':
            return "enter";
            break;
        case 'e':
            return "imes"
        case 'i':
            return "ai";
            break;
        case 'o':
            return "ober";
            break;
        case 'u':
            return "ufat";
            break;
        default:
            return "";
    } 
}

function mostrar(valor)
{
    ret= valor;
    return ret;
}
function textoNoEncontrado()
{
    document.getElementById("texto1").style.display="none";
    document.getElementById("texto2").style.display="grid";
}

function textoEncontrado()
{
    document.getElementById("texto1").style.display="grid";
    document.getElementById("texto2").style.display="none";
}

function encriptar(texto)
{
    
    let encriptado="";
    let i=0;
    let len=texto.length;
    while(i<len)
    {
        let letra =convetir(texto[i])
        if(letra!="")
        {
            encriptado+= letra;
        }else
        {
            encriptado+=texto[i];
        }
        i++;
    }
    return encriptado;
}

function desencriptar(texto)
{
    
    let len=texto.length;
    let deco="";
    for(let i =0;i<len;i++)
    {
        switch (texto[i])
        {
        case 'a':
            i+=1;
            deco+="i";
            break;

        case 'e':
            i+=4;
            deco+="a";
            break;

        case 'i':
            i+=3;
            deco+= "e";
            break;

        case 'o':
            i+=3;
            deco+='o';
            break;

        case 'u':
            i+=3;
            deco+='u';
            break;

        default:
            deco+=texto[i];
        } 
    }
    return deco;


}

function mostrarEncriptado()
{
    if (ret.length==0){
        textoNoEncontrado();
    } else{
        textoEncontrado();
    document.getElementById('textoEncriptado').innerHTML =encriptar(ret.toLowerCase());
}
}

function mostrarDesencriptar()
{
    if (ret.length==0){
        textoNoEncontrado();
    } else{
        textoEncontrado();
        document.getElementById('textoEncriptado').innerHTML=desencriptar(ret.toLowerCase());
    }
}

const $content=document.getElementById('textoEncriptado');


function copiarTexto()
{
    cp(document.getElementById('textoEncriptado').innerHTML);
}
function cp(texto)
{
 let areatexto=document.createElement('textarea');
 areatexto.value=texto;
 areatexto.setAttribute('readonly','')
 areatexto.style.position='absolute';
 areatexto.style.left='-9999px';

 document.body.appendChild(areatexto);

 let seleccionado = document.getSelection().rangeCount>0 ? document.getSelection().getRangeAt(0) : false;

 areatexto.select();

 document.execCommand('copy');

 document.body.removeChild(areatexto);
 
}