
proc run02_1(): string =
    return "TODO"

when not defined(js):
    echo run02_1()
else:
    proc js_run02_1(): cstring {.exportc.} =
        return cstring(run02_1())
