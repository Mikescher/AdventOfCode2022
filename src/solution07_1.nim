
proc run07_1(): string =
    const input = staticRead"../input/day07.txt"

    return "TODO"


when not defined(js):
    echo run07_1()
else:
    proc js_run07_1(): cstring {.exportc.} =
        return cstring(run07_1())
