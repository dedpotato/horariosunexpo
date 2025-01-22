
def choques(tablaSinProcesar):
    materias = []
    valornan=tablaSinProcesar[1][-2]
    for i in tablaSinProcesar:
        while(valornan in i): i.remove(valornan)
        j=i[3:-1]
        horario=[[j[k],j[k+1],j[k+2]] for k in range(0,len(j),3)]
        materias.append({'materia':i[0],'codigo':i[1],'seccion':i[2],'horario':horario,'profesor':i[-1]})
    #print(materias)
    matrixDeHorarios=[[0 for i in range(0,len(materias))] for j in range(0,len(materias))]
    for i in range(0,len(materias)):
        for  j in range(0,len(materias)):
            if(i==j):continue
            if(materias[i]['materia'] == materias[j]['materia']):
                matrixDeHorarios[i][j]=-1
                matrixDeHorarios[j][i]=-1
                continue
            for a in materias[i]['horario']:
                for b in materias[j]['horario']:
                    if a[:-1]==b[:-1]:
                        matrixDeHorarios[i][j]+=1
                        matrixDeHorarios[j][i]+=1
            matrixDeHorarios[i][j]=int(matrixDeHorarios[i][j]/2+.5)
            matrixDeHorarios[j][i]=int(matrixDeHorarios[j][i]/2+.5)
    return(matrixDeHorarios)
