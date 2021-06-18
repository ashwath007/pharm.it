import pandas as pd
import numpy as np

data = pd.read_csv("./medicine.csv")

for i in data:
    print(i)