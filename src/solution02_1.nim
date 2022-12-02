
proc run02_1(): string =
    const input = staticRead"../input/day02.txt"

    return "TODO"

when not defined(js):
    echo run02_1()
else:
    proc js_run02_1(): cstring {.exportc.} =
        return cstring(run02_1())
