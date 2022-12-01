
proc run19_1(): string =
    return "TODO"


when not defined(js):
    echo run19_1()
else:
    proc js_run19_1(): cstring {.exportc.} =
        return cstring(run19_1())
