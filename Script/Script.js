
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
    ret= valor;//encriptar(texto);
    return ret;
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


//document.write(encriptar("hola"));
//document.write("---encriptado---");
//document.write(desencriptar("enterimesaioberufat"))
//const botonEncriptar= document.querySelector("button");
//document.getElementById("botonE").onclick=encriptar;


function mostrarEncriptado()
{
    document.getElementById('texto_E').innerHTML =encriptar(ret);
}

function mostrarDesencriptar()
{
    document.getElementById('texto_E').innerHTML=desencriptar(ret);
}
