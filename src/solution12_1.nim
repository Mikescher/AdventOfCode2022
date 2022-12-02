
proc run12_1(): string =
    const input = staticRead"../input/day12.txt"

    return "TODO"


when not defined(js):
    echo run12_1()
else:
    proc js_run12_1(): cstring {.exportc.} =
        return cstring(run12_1())
