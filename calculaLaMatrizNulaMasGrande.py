
def granMatriz(tablaIntersecciones):
    tablaInterseccionesPura=[i[1:] for i in tablaIntersecciones[1:]]

    listaNueva =[[i] for i in range(0,len(tablaInterseccionesPura))]
    listaAgregados = []
    listaTotal = []


    while (listaNueva!=[]):
            
            for i in listaAgregados:
                listaTotal.append(i)
            listaAgregados = []
            for i in listaNueva:
                listaAgregados.append(i)
            listaNueva = []
            
            for i in listaAgregados:
                for j in range(0,len(tablaInterseccionesPura)):
                    elElementoNoChoca =True
                    if j<i[-1]:continue
                    if j in i:continue
                    """
                    print("j:",j," i:",i," i[-1]:",i[-1])
                    print("listaNueva:",listaNueva)
                    print("listaAgregados:",listaAgregados)
                    print("listaTotal:",listaTotal)
                    """
                    for k in i:
                        #print("funcion de interseccion tiene valor:",tablaInterseccionesPura[k][j])
                        if tablaInterseccionesPura[k][j] != 0:
                            elElementoNoChoca=False
                    if elElementoNoChoca:listaNueva.append(i+[j])
                    #input()
    for i in listaAgregados:
            listaTotal.append(i)
    return(listaTotal)
    
    
