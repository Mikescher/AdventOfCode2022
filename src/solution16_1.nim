
proc run16_1(): string =
    const input = staticRead"../input/day16.txt"

    return "TODO"


when not defined(js):
    echo run16_1()
else:
    proc js_run16_1(): cstring {.exportc.} =
        return cstring(run16_1())
