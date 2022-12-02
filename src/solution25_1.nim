
proc run25_1(): string =
    const input = staticRead"../input/day25.txt"

    return "TODO"


when not defined(js):
    echo run25_1()
else:
    proc js_run25_1(): cstring {.exportc.} =
        return cstring(run25_1())
