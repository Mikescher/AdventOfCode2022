
proc run06_1(): string =
    const input = staticRead"../input/day06.txt"

    return "TODO"


when not defined(js):
    echo run06_1()
else:
    proc js_run06_1(): cstring {.exportc.} =
        return cstring(run06_1())
