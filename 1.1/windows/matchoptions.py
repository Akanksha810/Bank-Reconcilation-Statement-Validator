import tkinter as tk

from utils.helpers import Font 

class MatchOptionsWindow(tk.Frame) :
    def __init__(self, parent, controller) :
        tk.Frame.__init__(self, parent)
        label = tk.Label(self, text = "MatchOptionsWindow", font = Font.LARGE_FONT)
        label.pack(pady = 10, padx = 10)
