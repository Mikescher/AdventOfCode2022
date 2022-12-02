
proc run09_1(): string =
    const input = staticRead"../input/day09.txt"

    return "TODO"


when not defined(js):
    echo run09_1()
else:
    proc js_run09_1(): cstring {.exportc.} =
        return cstring(run09_1())
