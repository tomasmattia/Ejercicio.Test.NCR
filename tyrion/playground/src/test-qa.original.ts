function solution(a: string, b: string): number
{
    let cantidad = 0;
    for (let i = 0; i <= a.length - b.length; i++) 
    {
        let sub = a.substr(i, b.length);
        if(esAnagrama(sub, b))
            cantidad++;
    }
    return cantidad;
}
    
function esAnagrama(palabra: string, anagrama: string)
{
    let primera = palabra.split('').sort();
    let segunda = palabra.split('').sort();
    return primera.join('') == segunda.join('')
}


solution("hola, que buena ola Laomir","OAL");
    