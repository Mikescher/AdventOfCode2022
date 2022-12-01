
proc run05_1(): string =
    return "TODO"


when not defined(js):
    echo run05_1()
else:
    proc js_run05_1(): cstring {.exportc.} =
        return cstring(run05_1())
