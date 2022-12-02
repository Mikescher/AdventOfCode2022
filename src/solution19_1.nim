
proc run19_1(): string =
    const input = staticRead"../input/day19.txt"

    return "TODO"


when not defined(js):
    echo run19_1()
else:
    proc js_run19_1(): cstring {.exportc.} =
        return cstring(run19_1())
