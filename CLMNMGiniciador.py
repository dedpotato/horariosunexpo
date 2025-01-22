import pandas
from calculaLaMatrizNulaMasGrande import granMatriz
excel_data_df = pandas.read_excel('horario 2024.xlsx', sheet_name='Hoja2', header=None)
pares = pandas.read_excel('horario 2024.xlsx', sheet_name='Hoja1', header=None).values.tolist()
[print(i) for i in excel_data_df.values.tolist()]
resultado= granMatriz(excel_data_df.values.tolist())
print("listaTotal:",resultado)
