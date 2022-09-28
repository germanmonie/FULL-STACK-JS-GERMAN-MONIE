#include <stdio.h>
#include <stdlib.h>
#include "pila.h"

void reemplazar (Pila P,int x,int j)
{
    Pila pilita;
    Pila aux;
    inicpila(&pilita);
    inicpila(&aux);
    while(!pilavacia(P))
    {
        desapilar(&aux,apilar(P))
        {
            if(aux==j)
            {
                desapilar(&x,apilar(pilita))
            }
            else
            {
                desapilar(&aux,apilar(pilita))
            }
            desapilar(&P)
        }
    }
    while(!VaciaPila(pilita))
    {
        Tope(&aux,pilita);
        desapilar(pilita);
        desapilar(&aux,apilar(P));

    }
