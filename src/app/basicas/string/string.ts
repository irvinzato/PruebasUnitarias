//Debo poner export para poder usar la función fuera del archivo u hacer la prueba
export function mensaje( nombre: string ): string {
    return `Saludos ${ nombre }`;
    /* return false; Asi hago que falle al proposito y veo que me muestra el "ng test" o Jazmine */
}