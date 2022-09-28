#include <stdio.h>
#include <stdlib.h>
#include "pila.h"
int main()
{
    void Reemplazar(pila P,int nuevo,int viejo){
    pila Q;
    inicpila(Q);
    int aux;
    while (!VaciaPila(P)){
    Tope(&aux,P);
    if (aux==viejo)
    apilar(&nuevo,Q);
    else apilar(&aux,Q);
    desapilar(P);}
    while(!VaciaPila(Q)){
    Tope(&aux,Q);
    desapilar(Q);
    apilar(&aux,P);}

}
}
