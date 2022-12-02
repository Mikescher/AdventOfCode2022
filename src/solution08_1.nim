
proc run08_1(): string =
    const input = staticRead"../input/day08.txt"

    return "TODO"


when not defined(js):
    echo run08_1()
else:
    proc js_run08_1(): cstring {.exportc.} =
        return cstring(run08_1())
