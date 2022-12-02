
proc run22_1(): string =
    const input = staticRead"../input/day22.txt"

    return "TODO"


when not defined(js):
    echo run22_1()
else:
    proc js_run22_1(): cstring {.exportc.} =
        return cstring(run22_1())
