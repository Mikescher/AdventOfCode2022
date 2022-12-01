
proc run13_1(): string =
    return "TODO"


when not defined(js):
    echo run13_1()
else:
    proc js_run13_1(): cstring {.exportc.} =
        return cstring(run13_1())
