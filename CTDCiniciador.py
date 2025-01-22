import pandas
from creaTablaDeChoques import choques

matriz=choques(pandas.read_excel('horario2024.xlsx', sheet_name='combinado', header=None).values.tolist()[1:])
for i in matriz:
        for j in i:
            pass            
            print(f'{j:2d}',end='')
        print()
