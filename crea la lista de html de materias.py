import pandas
from creaTablaDeChoques import choques

pares = pandas.read_excel('horario2024.xlsx', sheet_name='combinado', header=None).values.tolist()
listaChoque=choques(pandas.read_excel('horario2024.xlsx', sheet_name='combinado', header=None).values.tolist()[1:])

pares[0]=['']+pares[0]
for i in range(len(pares[0])):
    pares[0][i]='<th>{}</th>'.format(pares[0][i])
for i in range(1,len(pares)):
    etiqueta='materia{}'.format(i)
    for j in range(len(pares[i])):
        if type(pares[i][j])==type(0.1):pares[i][j]=''
        pares[i][j]='<td><label for="{}">{}</label></td>'.format(etiqueta,pares[i][j])
    pares[i]=['<td><input type="checkbox" id="{}" value="{}"></td><div id="info{}">'.format(etiqueta,i,i)]+pares[i]
for i in range(len(pares)):
    pares[i]=['<tr id="zafo{}">'.format(i)]+pares[i]+['</div></tr>']
[print(i) for i in pares]
resultado='<! DOCTYPE html><html><body><script type = "text/javascript" src="function.js"></script><script>function lafuncon() {let lista='+ str(listaChoque) +' ;lafuncion(lista);}</script><p>numero de materias: <div id="numeromaterias">'+str(len(pares))+'</div></p><table>'+'\n'.join(['\n'.join(i) for i in pares])+'</table><div id="result"></div><button type="button" id="boton" onClick="lafuncon()">Cockvore</button></body></html>'
with open('prototipo.html', 'w') as f:
    f.writelines(resultado)

