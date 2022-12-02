
proc run14_1(): string =
    const input = staticRead"../input/day14.txt"

    return "TODO"


when not defined(js):
    echo run14_1()
else:
    proc js_run14_1(): cstring {.exportc.} =
        return cstring(run14_1())
