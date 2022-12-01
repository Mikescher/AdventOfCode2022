
proc run12_1(): string =
    return "TODO"


when not defined(js):
    echo run12_1()
else:
    proc js_run12_1(): cstring {.exportc.} =
        return cstring(run12_1())
