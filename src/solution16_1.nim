
proc run16_1(): string =
    return "TODO"


when not defined(js):
    echo run16_1()
else:
    proc js_run16_1(): cstring {.exportc.} =
        return cstring(run16_1())
