
proc run10_1(): string =
    return "TODO"


when not defined(js):
    echo run10_1()
else:
    proc js_run10_1(): cstring {.exportc.} =
        return cstring(run10_1())
