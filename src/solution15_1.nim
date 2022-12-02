
proc run15_1(): string =
    const input = staticRead"../input/day15.txt"

    return "TODO"


when not defined(js):
    echo run15_1()
else:
    proc js_run15_1(): cstring {.exportc.} =
        return cstring(run15_1())
