
proc run14_1(): string =
    return "TODO"


when not defined(js):
    echo run14_1()
else:
    proc js_run14_1(): cstring {.exportc.} =
        return cstring(run14_1())
