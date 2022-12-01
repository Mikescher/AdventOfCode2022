
proc run18_1(): string =
    return "TODO"


when not defined(js):
    echo run18_1()
else:
    proc js_run18_1(): cstring {.exportc.} =
        return cstring(run18_1())
