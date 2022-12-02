
proc run23_1(): string =
    const input = staticRead"../input/day23.txt"

    return "TODO"


when not defined(js):
    echo run23_1()
else:
    proc js_run23_1(): cstring {.exportc.} =
        return cstring(run23_1())
