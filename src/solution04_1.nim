
proc run04_1(): string =
    return "TODO"


when not defined(js):
    echo run04_1()
else:
    proc js_run04_1(): cstring {.exportc.} =
        return cstring(run04_1())
