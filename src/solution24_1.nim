
proc run24_1(): string =
    return "TODO"


when not defined(js):
    echo run24_1()
else:
    proc js_run24_1(): cstring {.exportc.} =
        return cstring(run24_1())
