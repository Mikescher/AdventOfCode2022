
proc run06_1(): string =
    return "TODO"


when not defined(js):
    echo run06_1()
else:
    proc js_run06_1(): cstring {.exportc.} =
        return cstring(run06_1())
