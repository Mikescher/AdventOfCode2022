
proc run03_1(): string =
    return "TODO"


when not defined(js):
    echo run03_1()
else:
    proc js_run03_1(): cstring {.exportc.} =
        return cstring(run03_1())
