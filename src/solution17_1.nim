
proc run17_1(): string =
    return "TODO"


when not defined(js):
    echo run17_1()
else:
    proc js_run17_1(): cstring {.exportc.} =
        return cstring(run17_1())
