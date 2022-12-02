
proc run13_1(): string =
    const input = staticRead"../input/day13.txt"

    return "TODO"


when not defined(js):
    echo run13_1()
else:
    proc js_run13_1(): cstring {.exportc.} =
        return cstring(run13_1())
