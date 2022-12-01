
proc run08_1(): string =
    return "TODO"


when not defined(js):
    echo run08_1()
else:
    proc js_run08_1(): cstring {.exportc.} =
        return cstring(run08_1())
