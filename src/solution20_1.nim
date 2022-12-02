
proc run20_1(): string =
    const input = staticRead"../input/day20.txt"

    return "TODO"


when not defined(js):
    echo run20_1()
else:
    proc js_run20_1(): cstring {.exportc.} =
        return cstring(run20_1())
